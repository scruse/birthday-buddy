import { useState } from 'react'
import data from './data'
import BirthdayCount from './components/BirthdayCount'
import PersonList from './components/PersonList'
const App = () => {
  const [people, setPeople] = useState(data)

  const clearPeople = () => {
    setPeople([])
  }

  return (
    <>
      <main>
        <section className="container">
          <BirthdayCount count={people.length} />
          <PersonList people={people} />
          <button type="text" className="btn btn-block" onClick={clearPeople}>
            Clear All
          </button>
        </section>
      </main>
    </>
  )
}
export default App
