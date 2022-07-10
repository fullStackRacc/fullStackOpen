import Person from "./Person"

const List = ({ allPersons, persons }) => {
    if (persons.length === 0) {
        return (
            <ul>
            {allPersons.map(person => 
                <Person key={person.id} name={person.name} number={person.number} />
            )}
          </ul>
        )
    }
    else {
        return (
            <ul>
            {persons.map(person => 
                <Person key={person.id} name={person.name} number={person.number} />
            )}
          </ul>
        )
    }
}

export default List