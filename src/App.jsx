import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Pricelist from './component/Pricelist/Pricelist'
import PriceCard from './component/PriceCard/PriceCard'
import DashBoard from './component/DashBoard/DashBoard'
import PhoneBar from './component/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h2 className='text-7xl  text-center text-purple-700'>tailwind css</h2>
      <Pricelist></Pricelist>
      <PriceCard></PriceCard>
      <DashBoard></DashBoard>
      <PhoneBar></PhoneBar>
      
    </div>
  )
}

export default App
