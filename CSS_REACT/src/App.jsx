
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {

  return (
    <>
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este paragrafo é do app.jsx</p>
      <p style={{ color: 'cyan', padding: '10px' }}>Este paragrafo também é do app.jsx</p>
      {/* CSS MODULES */}
      <Title />
    </>
  )
}

export default App
