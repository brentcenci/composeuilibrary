import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CodeSnippet from "./components/CodeSnippet.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Card/>
        <h1>Vite + React</h1>
        <CodeSnippet/>
        <HomeScreen/>
    </>
  )
}

export default App
