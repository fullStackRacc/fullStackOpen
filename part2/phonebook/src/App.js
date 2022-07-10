import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState([
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
      date: new Date().toISOString(),
      phoneNumber: newPhoneNumber,
      important: Math.random() < 0.5,
      id: persons.length + 1,
    }
    if (persons.find(element => element.name === nameObject.name)) {
      alert(`${nameObject.name} already exists in phonebook!`)
    } 
    else {
      setPersons(persons.concat(nameObject))
    } 
    setNewName('')
    setNewPhoneNumber('')
    console.log(persons)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }


  const Person = (props) => {
    return (
      <li key={props.id}>{props.name}: {props.number}</li>
    )
  }

  const namesToShow = search === "" 
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>
      <p>filter shown with</p> <input 
                          value={search}
                          onChange={handleSearch}
                        />
      <form onSubmit={addName}>
        <div>
          name: <input 
                  value={newName} 
                  onChange={handleNameChange} 
                /><br />
          number: <input 
                    value={newPhoneNumber} 
                    onChange={handlePhoneNumberChange}
                  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      </div>
      <ul>
        {namesToShow.map(persons => 
            <Person key={persons.id} name={persons.name} number={persons.number}  />
        )}
      </ul>
    </div>
  )
}

export default App