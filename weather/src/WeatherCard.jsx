import React from 'react'
import './WeatherCard.css'
import { useSelector } from 'react-redux';

export default function WeatherCard() {
    const placeData = useSelector((state)=>state.placeData);
    const scene = useSelector((state)=>state.scene);
    return (
        <div className={scene?"container light":"container dark"}>
             {placeData.location?(
                <div>
            <div className="icon"><img src={placeData.current.condition.icon} alt="not available"/></div>
                <div className="temp"><h2>{placeData.current.temp_c}°</h2></div>
                <div className="current"><p className="p">{placeData.current.condition.text}</p></div>
                <div className="place"><p className="p2">{placeData.location.name}</p></div>
                <div className="details"> 
                <p className="span1"> <span className="inner">Wind Now</span>
                    <span className="inner">Humidity</span>
                    <span className="inner">Precipitation</span></p>
                </div>
                <div className="details2">
                    
                <p className="span2"> <span className="inner2">{placeData.current.wind_kph}Kph</span>
                    <span style={{marginLeft:80,marginRight:80}}>{placeData.current.humidity}%</span>
                    <span >{placeData.current.precip_in}%</span></p>
                </div>
                
                </div>
            ):(
                <h1>Place not found</h1>
            )
        }
        </div>
    )
}
