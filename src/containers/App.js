import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx'
import Cards from '../components/Cards.jsx'
import About from '../components/About.jsx'
import Ciudad from '../components/Ciudad.jsx'
import { Route } from 'react-router-dom';

function App() {

  const [cities, setCities] = useState([]);
  let apiKey = '4ae2636d8dfbdc3044bede63951a019b'
  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){          
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onClose(city){
    let newCities = cities.filter(function(element){
      return element.id !== city;
    });
    setCities(newCities)  
    //setCities(oldCities => oldCities.filter(c => c.id !== id));  
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {      
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch}/>      
      {/* <Nav onSearch={onSearch}/> */}
      <div>  
      <Route
        exact
        path='/'
        render={() => <Cards onClose={onClose} cities={cities}/> }
      />
      { /* Tu código acá: */ }
      <Route    
        exact
        path='/about'
        render={() => <About/>}
      />
      { /* Tu código acá: */ }
      <Route
        exact
        path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)}/>}
      />
           
      </div>
      <hr/>
    </div>
  );
}
export default App;
