import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home'
import Profiler from './components/Profiler'



function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profiler" element={<Profiler name={"Peter"}/>}></Route>
        <Route path="/profiler1" element={<Profiler name={"Kristoffer"}/>}></Route>
        <Route path="/profiler2" element={<Profiler name={"Nikolai"}/>}></Route>
      </Routes>
    </Layout>
    </>
  )
}

export default App
