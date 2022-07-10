import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      phoneNumber: '(345) 126-7890'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [showAll, setShowAll] = useState(true)

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

  const Person = (props) => {
    return (
      <li key={props.id}>{props.name}: {props.number}</li>
    )
  }

  const namesToShow = showAll 
  ? persons 
  : persons.filter(note => note.important)

  return (
    <div>
      <h2>Phonebook</h2>
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
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {namesToShow.map(persons => 
            <Person key={persons.id} name={persons.name} number={persons.phoneNumber}  />
        )}
      </ul>
    </div>
  )
}

export default App