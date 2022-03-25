import React from "react";
import { Link } from 'react-router-dom';
import './Ciudad.css'

export default function Ciudad ({city}) {
    if(city){ 
    return (
    <div className="ciudad">
      <div className="card">
        <div id="closeIcon" className="row">
        <Link to='/' className="btn btn-sm btn-danger">X</Link>            
        </div>
        <div className="card-body">        
        <Link to='/'><h5 className="card-title">{city.name}</h5></Link> 
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{city.min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{city.max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
          <div className="container"> 
                        <div className="info">
                            <div>Temperatura: {city.temp} ºC</div>
                            <div>Clima: {city.weather}</div>
                            <div>Viento: {city.wind} km/h</div>
                            <div>Cantidad de nubes: {city.clouds}</div>
                            <div>Latitud: {city.latitud}º</div>
                            <div>Longitud: {city.longitud}º</div>
                        </div>                
            </div>
                   
        </div>
      </div>
      </div>
    );

} else {
    return  (
                    <div className="ciudad">            
                        <div className="container">
                            <Link to='/'><h4>Ciudad no encontrada, volver</h4></Link>
                        </div>
                    </div>
                )
}
}


// export default function Ciudad({city, onClose}) {   
    
//     if(city){ 
//         return (
           
//             <div className="ciudad">                       
//                 <div className="container"> 
//                         <div className="info">
//                             <div>Temperatura: {city.temp} ºC</div>
//                             <div>Clima: {city.weather}</div>
//                             <div>Viento: {city.wind} km/h</div>
//                             <div>Cantidad de nubes: {city.clouds}</div>
//                             <div>Latitud: {city.latitud}º</div>
//                             <div>Longitud: {city.longitud}º</div>
//                         </div>                
//                 </div>
//                 <Link to={'/'}>             
//                         <h5>Cerrar</h5>
//                 </Link>
//             </div>
            
//         )
//     } else {
//         return  (
//             <div className="ciudad">            
//                 <div className="container">
//                     <h2>Ciudad no encontrada</h2>
//                 </div>
//             </div>
//         )
//     }
// }