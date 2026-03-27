import React from 'react'

function Cart({ cart }) {
    console.log(cart);

    /*
    let totalPopulation = 0;
    for (let i = 0; i < addCountry.length; i++) {
        const country = addCountry[i];
        totalPopulation += country.population
    }
    */
    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0);

    return (
        <>
            <h2>Country Added: {cart.length}</h2>
            <p><b>Total Population:</b> {totalPopulation}</p>
        </>
    )
}

export default Cart