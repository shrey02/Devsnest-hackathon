import { useState } from "react";
import "./Templates.css";


export default function Templates({ memes }) {
  const [select, setSelect] = useState(false);
  const [meme, setMeme] = useState({id:null});
  const [down, setDown] = useState("");
  const [form, setForm] = useState({
    template_id: meme.id,
    Username: "ShreySinha",
    password: "myself2244",
    boxes: [],
  });
  const generate = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.Username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
      (async()=>{
        const response = await fetch(url);
        const data =await response.json();
        if (data.success) {setMeme({ ...meme, url: data.data.url })
        setDown(data.data.url);
      };
      })();
    });
  };

  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jpeg");
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="templates">
      {select ? (
        <div className="container">
          <div className="single-container">
            <div
              className="image"
              style={{ backgroundImage: `url(${meme.url})` }}
            ></div>
          </div>
          <button
            className="choose"
            onClick={() => {
              setSelect(false);
            }}
          >
            choose Template
          </button>
          <button onClick={generate}>Create Meme</button>
          <br />
          {[...Array(meme.box_count)].map((_, index) => (
            <input
              key={index}
              placeholder={`caption ${index + 1}`}
              onChange={(e) => {
                const newBoxes = form.boxes;
                newBoxes[index] = { text: e.target.value };
                const id = meme.id;
                setForm({ ...form, template_id: id, boxes: newBoxes });
              }}
            />
          ))}
          <button>
            <a
              href={down}
              onClick={(e) => {
                e.preventDefault();
                download(e);
              }}
              style={{ textDecoration: "none" }}
            >
              <i className="fa fa-download" />
              download
            </a>
          </button>
        </div>
      ) : (
        <div className="container">
          <h1>Memes</h1>
          {memes.map((meme, index) => (
            <div
              key={index}
              className="template"
              onClick={() => {
                setSelect(true);
                setMeme(meme);
              }}
            >
              <div
                className="image"
                style={{ backgroundImage: `url(${meme.url})` }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
