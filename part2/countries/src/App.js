import { useState, useEffect } from 'react'
import axios from "axios"

const Country = ({ name, length, languages, capital, area, flag }) => {
  if (length !== 1) {
    return (
      <p>{name}</p>
    )
  }
  else {
    return (
      <>
        <h1>{name}</h1>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
        <ul>
          {Object.keys(languages).map((k, i) => <li key={i}>{languages[k]}</li> )}
        </ul>
        <img src={flag} />
      </>
    )
  }

}

const Content = (props) => {
  if (props.data.length > 10 && props.data.length !== 1) {
    return (
      <>
        <p>Too many countires, specify another filter!</p>
      </>
    )
  }
  else if (props.data.length < 10 && props.data.length > 1) {
    return (
      <>
          {props.data.map((country, i) => 
            <Country key={i} name={country.name.common} length={props.data.length}/>  
          )}
      </>
    )
  } 
  else {
    return (
      <>
        {props.data.map((country, i) => 
          <Country 
            key={i} 
            name={country.name.common} 
            length={props.data.length} 
            languages={country.languages} 
            capital={country.capital[0]}
            area={country.area}
            flag={country.flags.png}
          />  
        )}
      </>
    )
  }

}

const App = () => {
  const [search, setSearch] = useState('')
  const [allData, setAllData] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        console.log('promise fufilled')
        setAllData(res.data)
        console.log(allData)
      })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
    const regex = new RegExp( search, 'i' );
    const filteredCountries = () => allData.filter(country => country.name.common.match(regex))
    setData(filteredCountries)
  }

  return (
    <div>
      <span>Type a country name: </span> 
      <input 
        value={search}
        onChange={handleSearch}
      />
      <Content 
        data = {data.length < 1 ? allData : data}
      />
    </div>
  )
}

export default App