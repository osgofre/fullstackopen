import { useState, useEffect } from 'react'
import countryService from './services/countries'
import {Countries} from './components/Countries'
import { SingleCountry } from './components/SingleCountry'

function App() {
  const [countries, setCountries] = useState(null)
  const [filter, setFilter] = useState('')
  const [showCountry, setShowCountry] = useState(null)

  useEffect(() => {
    countryService
      .getAll()
      .then(response => {
        setCountries(response.data)
      })
  },[])

  const handleChange = (event) => setFilter(event.target.value.toLowerCase())  
  const handleClickShow = (country) => setShowCountry(country)

  if (!countries) {
    return <p>Loading...</p>
  }
  
  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter))
  
  return (
    <>
      <p>Find countries <input onChange={handleChange}/></p>
      <Countries countries={countriesToShow} handleClickShow={handleClickShow}/>
      {showCountry && <SingleCountry country={showCountry}/>}
    </>
  )
}

export default App
