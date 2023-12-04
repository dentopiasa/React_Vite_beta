import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Greet from './components/Greet.jsx'
import Welcome from './components/Welcome.jsx'
import AnimalApp from './components/AnimalApp.jsx'
import Message from './components/Message.jsx'
import Counter from './components/Counter.jsx'
import FunctionClick from './components/FunctionClick.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FunctionClick />
    {/*<Counter />
    <Greet name="Bruce" heroName="Batman">
      <p>This is a children prop</p>
    </Greet >
    <Greet name="Clark" heroName="Superman"> 
      <button>click</button>
    </Greet>
    <Greet name="Diana" heroName="Wonder Woman" />
    <Welcome name="Bruce" heroName="Batman" />
    <Welcome name="Clark" heroName="Superman" />
    <Welcome name="Diana" heroName="Wonder Woman" />
<AnimalApp />*/}
  </React.StrictMode>,
)
