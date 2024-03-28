import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-slate-900 dark:text-white text-3xl font-bold p-8 '>Primeiro Projeto de React</h1>
      <p className='text-cyan-500'>Páragrafo 1</p>
      <p className='text-cyan-500'>Parágrafo 2</p>
      <p className='text-cyan-500'>Parágrafo 3</p>
    </>
  )
}

export default App
