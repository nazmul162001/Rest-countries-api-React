import React from 'react';
import './Country.css';

const Country = (props) => {
  return (
    <div className='container-country'>
      <h2>Country Name: {props.country}</h2>
      <p>Capital: {props.capital}</p>
      <p>Population: {props.population}</p>
    </div>
  );
};

export default Country;