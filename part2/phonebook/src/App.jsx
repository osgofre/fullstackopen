import { useState, useEffect } from 'react'
import { Persons } from './Components/Persons'
import { Filter } from './Components/Filter'
import { PersonForm } from './Components/PersonForm'
import Notification from './Components/Notification'
import personService from './services/persons'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [updateMessage, setUpdateMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)


  useEffect(() => {
    personService
      .getAll()
      .then(response => {       
        setPersons(response.data)
      })
  }, [])

  const nameExists = (name) => persons.find(person => person.name === name)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (nameExists(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replate thge ol number with a new one?`)) {
        const personToUpdate = persons.find(person => person.name === newName)
        personService
          .update(personToUpdate.id, {...personToUpdate, number:newNumber})
          .then(response => {
            setPersons(persons.map(person => person.id === personToUpdate.id ? response.data : person))
            setNewName('')
            setNewNumber('')
            showUpdateMessage(`Updated ${newName}`)
          })
          .catch(error => {
            showDeleteMessage(`Information of ${personToUpdate.name} has already been removed from server`)     
          })
      }
    } else {

      const personObject = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1)
      }

      personService
        .create(personObject)
        .then(response => {
          console.log(response)
          setPersons([...persons, response.data])
          setNewName('')
          setNewNumber('')
          showUpdateMessage(`Added ${newName}`)
        })
    }
  }

  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id)
    if (window.confirm(`Delete ${personToDelete.name}`)){
      personService
        .deletePerson(id)
        .then(response => {
          console.log("delete response: ", response.data)
          setPersons(persons.filter(person => person.id != id))
        })
        .catch(error => {
          showDeleteMessage(`Information of ${personToDelete.name} has already been removed from server`)     
        })
    }
  }

  const showUpdateMessage = (message) => {
    setUpdateMessage(message)
    setTimeout(() => {
      setUpdateMessage(null)
    }, 5000)
  }

  const showDeleteMessage = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const handleChangeName = (event) => setNewName(event.target.value)
  const handleChangeNumber = (event) => setNewNumber(event.target.value)
  const handleChangeFilter = (event) => setNewFilter(event.target.value)

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newFilter))  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={updateMessage} className="update"/>
      <Notification message={errorMessage} className="error"/>

      <Filter handler={handleChangeFilter} />

      <h3>Add a new</h3>
      <PersonForm 
                newName={newName}
                newNumber={newNumber}
                handleChangeName={handleChangeName}
                handleChangeNumber={handleChangeNumber}
                handleSubmit={handleSubmit}
            />

      <h3>Numbers</h3>
      <Persons
        persons={personsToShow}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default App