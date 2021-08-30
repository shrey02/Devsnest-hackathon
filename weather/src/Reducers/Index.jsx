import { combineReducers } from 'redux';
import placeReducer from './placeReducer';
import placeDataReducer from './placeDataReducer';
import sceneReducer from './sceneReducer';

const rootReducer = combineReducers({
    place: placeReducer,
    placeData: placeDataReducer,
    scene: sceneReducer,
});
export default rootReducer;