import { useState } from 'react'

const App = (props) => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      date: new Date().toISOString(),
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
    console.log(persons)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const Person = (props) => {
    console.log(props)
    return (
      <li key={props.id}>{props.name}</li>
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
          name: <input value={newName} onChange={handleNameChange} />
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
            <Person key={persons.id} name={persons.name} />
        )}
      </ul>
    </div>
  )
}

export default App