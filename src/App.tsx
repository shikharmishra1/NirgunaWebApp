import { ReactNode, useEffect, useRef, useState } from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react'
import './App.css'
import {BrowserRouter, Router, Route, Routes, Outlet} from 'react-router-dom'
import IDE from './components/pages/IDE'
import Home from './components/pages/Home'
import Layout from './Layout'
import NavBar from './components/NavBar'


export default function App() {

  return(
    <BrowserRouter >
    <div className='flex flex-col'>
    <NavBar/>
    <Routes>
      
      <Route path='/' >
        <Route path='ide' element={<IDE/>}/>
        <Route path='home' element={<Home/>}/>
        
      </Route>
    </Routes>
    </div>
  </BrowserRouter>
  )
    
}



