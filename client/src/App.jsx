import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import Home from './views/home'
import Create from './views/create'
import Index from './views'
function App() {
  return (
    <Routes>
      
      <Route path='/' element={<Index />}>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<Create />} />
      </Route>
    </Routes>
  )
}

export default App