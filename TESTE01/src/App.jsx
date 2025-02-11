import { useState } from 'react'
import './App.css'
import FirstComponent from './components/FirstComponent'  
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello world</h1>
      <img src="/img1.png" />
    </>
  )
}

export default App
