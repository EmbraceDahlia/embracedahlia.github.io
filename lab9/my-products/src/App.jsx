import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'
import ProductListReducer from './components/ProductListReducer'

function App() {
  const [mode, setMode] = useState('reduce');

  return (
    <>
      <h1>My Products</h1>
      {mode === 'state' ? <ProductList /> : <ProductListReducer />}
    </>
  )
}

export default App
