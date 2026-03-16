import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import JDBC from './components/JDBC'
import Payslip from './components/Payslip'
import Purchase from './components/Purchase'
import Formdate from './components/Formdate'
import Session from './components/Session'
import Header from './components/Header'
import SWI from './components/SWI'
import RMI from './components/RMI'
import Kmeans from './components/Kmeans'
import Out from './components/Out'
import Dendro from './components/Dendro'
import Classification from './components/Classification'
import DecessionTree from './components/DecessionTree'
import Electricity from './components/Electricity'
import Apriori from './components/Apriori'
import Visualization from './components/Visualization'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/rmi" element={<RMI />} />
        <Route path="/jdbc" element={<JDBC />} />
        <Route path="/ps" element={<Payslip/>} />
        <Route path="/purchase" element={<Purchase/>} />
        <Route path="/header" element={<Header/>} />
        <Route path="/formdata" element={<Formdate/>} />
        <Route path="/session" element={<Session/>} />
        <Route path="/swi" element={<SWI/>} />
        <Route path="/out" element={<Out/>} />
        <Route path="/k" element={<Kmeans/>} />
        <Route path="/dendro" element={<Dendro/>} />
        <Route path="/classi" element={<Classification/>} />
        <Route path="/dt" element={<DecessionTree/>} />
        <Route path="/ecity" element={<Electricity/>} />
        <Route path="/apri" element={<Apriori/>} />
        <Route path="/vis" element={<Visualization/>} />
      </Routes>
   </BrowserRouter>
  )
  
}

export default App
