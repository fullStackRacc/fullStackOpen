import { useState, useEffect } from 'react'
import Filter from "./components/Filter"
import Form from "./components/Form"
import List from "./components/List"
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([])
  const [allPersons, setAllPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(res => {
        console.log('promise fufilled')
        setAllPersons(res.data)
      })
  }, [])
  console.log(`render ${allPersons.length} names`)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newPhoneNumber,
      id: allPersons.length + 1,
    }
    console.log('checking for dupes')
    if (allPersons.find(element => element.name === nameObject.name)) {
      console.log('found dupe')
      alert(`${nameObject.name} already exists in phonebook!`)
    } 
    else {
      console.log('setting new person')
      console.log(nameObject)
      setAllPersons(allPersons.concat(nameObject))
      console.log(allPersons)
    } 
    setNewName('')
    setNewPhoneNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
    const regex = new RegExp( search, 'i' );
    const filteredPersons = () => allPersons.filter(person => person.name.match(regex))
    setPersons(filteredPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        value={search} 
        onChange={handleSearch} 
      />
      <h2>Add a new</h2>
      <Form 
        onSubmit={addName} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newPhoneNumber={newPhoneNumber} 
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <h2>Numbers</h2>
      <div>
      <List 
        allPersons={allPersons}
        persons={persons}
      />
      </div>
    </div>
  )
}

export default App