import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RadioBottomBarPlayer from '../lib/component/radio-bottom-bar-player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{
        position: "fixed",
        bottom: 0,
        zIndex: 100,
        left: 0,
        width: "98vw",
      }}>

        <RadioBottomBarPlayer 
          streamUrl='http://91.223.70.109:8000/radio.mp3' 
          title='test title' 
          description='description'
          secondDescription='asdf'
          onErrorCatched={(error) => {
            console.log('our errrorr is:', error)
          }}
        />
      </div>
    </>
  )
}

export default App
