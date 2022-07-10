import { useState } from 'react'
import Filter from "./components/Filter"
import Form from "./components/Form"
import List from "./components/List"

const App = () => {
  const [persons, setPersons] = useState([])
  const [allPersons, setAllPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [search, setSearch] = useState('')

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