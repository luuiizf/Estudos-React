import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUsername from './components/ShowUsername'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  const [count, setCount] = useState(0)

  function showMessage() {
    console.log("Evento teste")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
     <ConditionalRender />
     <ShowUsername name="Luiz"/>
     <CarDetails brand="Ferrari" km={5000} color="Vermelho" />
     <CarDetails brand="Mercedes" km={0} color="Preto" />
     <CarDetails brand="Fiat" km={10000} color="Branco" />
     <Fragment />
     {/* children */}
     <Container>
        <h2>Esse é o conteúdo do container</h2>
     </Container>
    <ExecuteFunction myFunction={showMessage} />
    <Message msg={message}/>
    <ChangeMessageState handleMessage={handleMessage}/>
    </>
  )
}

export default App
