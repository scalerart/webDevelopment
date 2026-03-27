import { useEffect, useState } from 'react'
import './App.css'
import Country from './Country'
import Cart from './Cart';

function App() {
  const [countrys, setCountrys] = useState([]);
  const [addCountry, setAddCountry] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,capital,numericCode')
      .then(res => res.json())
      .then(data => setCountrys(data))
      .catch(error => console.log(error))
  }, [])

  const handleAddCountry = (country) => {
    setAddCountry([...addCountry, country]);
  }

  return (
    <div className='country-cart'>
      <div className='country'>
        {
          countrys.map((country, i) =>
            <Country
              key={i}
              handleAddCountry={handleAddCountry}
              country={country}
            />)
        }
      </div>

      <div className="cart">
        <Cart
          cart={addCountry}
        ></Cart>
      </div>
    </div>
  )
}

export default App
