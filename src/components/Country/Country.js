import React from 'react';
import './Country.css';

const Country = (props) => {
  // use distructuring 
  const {name, capital, population, region, area} = props.country
  return (
    <div className='container-country'>
      <h3> <h2>Country:</h2> {name.common}</h3>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Area: {area}</p>
    </div>
  );
};

export default Country;