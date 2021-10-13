import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data)
  const clearList = () => {
    setPeople([])
  }
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
        <button onClick={clearList}>Clear Items</button>
      </section>
    </main>
  )
}

export default App
