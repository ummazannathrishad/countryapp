import React from 'react';
import style from './country.module.css';

const country = (props) => {

    const {name, flags,capital,population,area} = props.country;

    const handleRemoveCountry = (name) => {
        props.onRemoveCountry(name);
    }
  return (
    <article className={style.country}>
        <div>
            <img src={flags.png} alt={name.common}/>
            <h3>Name : {name.common}</h3>
            <h3>population : {population}</h3>
            <h3>capital : {capital}</h3>
            <h3>Area : {area}</h3>
            <button className={style.btn} onClick = {() =>{
              handleRemoveCountry(name.common)
            }} >
              Remove country
            </button>
            
        </div>
    </article>
  )
}

export default country;