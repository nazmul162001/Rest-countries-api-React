import React from 'react';
import './Country.css';

const Country = (props) => {
  // use distructuring 
  const {name, capital, population, region, area, flags, maps} = props.country
  return (
    <div className='container-country'>
      <img src={flags.png} alt='' />
      <h3> <h2>Country:</h2> {name.common}</h3>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Area: {area}</p>
      <a href={maps.googleMaps} target="_blank">Visit Map</a>
    </div>
  );
};

export default Country;