import { useState,useEffect } from "react";
import Templates from "./Templates";


function Memegenerator() {
    const [memes, setMemes] = useState([]);
  useEffect(() => {
    async function Getmeme() {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = response.json();
      return data;
    }
    Getmeme().then((data) => {
      setMemes(data.data.memes);
      console.log(memes);
    });
  }, [])
  return (
    <Templates memes={memes}/>
  )
}
export default Memegenerator;