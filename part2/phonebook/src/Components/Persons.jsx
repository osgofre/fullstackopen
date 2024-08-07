import { Person } from "./Person";

export const Persons = ({persons, handleDelete}) => {
    return (
        <div className="persons">
            {persons.map(person => <Person key={person.id} name={person.name} number={person.number} handleDelete={() => handleDelete(person.id)}/>)}
        </div>
    )
}