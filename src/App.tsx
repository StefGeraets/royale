import React from 'react'
import Map from './components/Map'
import Settings from './components/Settings'

function App() {
  const doAction = (e: any) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <div className='flex h-screen' tabIndex={0} onKeyDown={doAction}>
      <Map />
      <Settings />
    </div>
  )
}

export default App
