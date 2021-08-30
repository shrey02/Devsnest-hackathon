const sceneReducer=(state=false,action)=>{
    if(action.type === "UPDATE_SCENE"){
        return action.payload;
    }
    return state;
}
export default sceneReducer;