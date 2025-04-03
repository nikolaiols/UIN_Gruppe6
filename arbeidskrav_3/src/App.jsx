import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/home'
import Asrin from './components/Asrin'
import Kristoffer from './components/Kristoffer'
import Nikolai from './components/Nikolai'


function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/asrin" element={<Asrin/>}></Route>
        <Route path="/kristoffer" element={<Kristoffer/>}></Route>
        <Route path="/nikolai" element={<Nikolai/>}></Route>
      </Routes>
    </Layout>
    </>
  )
}

export default App
