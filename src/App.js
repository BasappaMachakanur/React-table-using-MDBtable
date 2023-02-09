import React from 'react'
import ContextApi from './Api/ContextApi'
import User from './Components/User'


const App = () => {
  return (
     <ContextApi>
      <User/>
     </ContextApi>
  )
}

export default App