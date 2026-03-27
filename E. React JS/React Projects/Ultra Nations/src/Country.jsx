import React from 'react'
import './Country.css'

function Country({ country, handleAddCountry }) {
    const { name, flags, population } = country;

    return (
        <div className='item'>
            <h2>{name.common}</h2>
            <div className="img-box">
                <img src={flags.svg} alt="" />
            </div>
            {/* <h3>{country.capital}</h3> */}
            <p><b>Population:</b> {population}</p>
            <button onClick={() => handleAddCountry(country)}>Add Country</button>
        </div>
    )
}

export default Country      