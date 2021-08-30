import React from 'react'
import { withStyles, makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Field.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updatePlaceData } from './Actions/Index';
import { updatePlace } from './Actions/Index';
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#000000',
    borderColor: '#000000',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#000000',
      borderColor: '#000000',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#000000',
      borderColor: '#000000',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,0,0,.3)',
    },
  },
})(Button);
const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(0),
      marginLeft:theme.spacing(1)
    },
  }));

export default function Field() {
   const place = useSelector((state) => state.place);
   const dispatch = useDispatch();
    const classes = useStyles();
    return (
        <div className='search'>  
             <input placeholder='Enter City' className="text" value={place} onChange={(e)=>{
               dispatch(updatePlace(e.target.value));
             }}/>
             <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} onClick={()=>{
               dispatch(updatePlaceData(place));
             }}>
        Search
      </BootstrapButton>
        </div>
    )
}
