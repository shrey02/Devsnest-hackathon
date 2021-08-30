const updatePlace=(place)=>{
    return{
        type:'UPDATE_PLACE',
        payload: place,
    }
}
const updatePlaceData=(place)=>{
 return (dispatch)=>{
    fetch(`https://api.weatherapi.com/v1/current.json?key=49b5d2fd28724e7f83481244212908&q=${place}`)
.then((res)=> res.json()).then((data)=>{
  dispatch({
      type:"UPDATE_PLACE_DATA",
      payload: data,
  })
  console.log(data)
});
};
}
const updateScene=(theme)=>{
    return{
        type:"UPDATE_SCENE",
        payload:theme,
    }
}
export {updatePlaceData,updatePlace,updateScene};