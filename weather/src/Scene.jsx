import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { updateScene } from './Actions/Index';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './Scene.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
export default function Scene() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const scene = useSelector(state => state.scene);

  return (
      <div className="button_container">
    <div className={classes.root}>
      
      <div className="wrapper">
    	<button className="button_change" onClick={()=>{
          dispatch(updateScene(!scene))
          console.log(scene)
      }}>
            {scene?(
                 <>
                 <span className="scale rotate-4">R</span>
                 <span className="scale rotate-2">a</span>
                 <span className="scale rotate-3">i</span>
                 <span className="scale rotate-1">n</span>
                 <span className="scale rotate-2">y</span>
                 </>
           ):(   
             <>
             <span className="scale rotate-4">S</span>
             <span className="scale rotate-2">u</span>
             <span className="scale rotate-3">n</span>
             <span className="scale rotate-1">n</span>
             <span className="scale rotate-2">y</span>
             </>
            )        }
		</button>
        </div>
    </div>
    </div>
   )
}
