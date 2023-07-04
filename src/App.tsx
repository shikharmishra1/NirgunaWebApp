
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IDE from './components/pages/IDE'
import Home from './components/pages/Home'
import NavBar from './components/NavBar'
import Contact from './components/pages/Contact'
import GettingStarted from './components/Docs/Getting Started/GettingStarted'
import DocsLayout from './components/Docs/DocsLayout'

import HelloWorld from './components/Docs/Getting Started/HelloWorld'



export default function App() {
 
  return(
    <BrowserRouter >
    <div className='flex flex-col'>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Nirgunawebapp' >
        <Route index element={<Home/>}/>
        <Route path='ide' element={<IDE/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='docs'element={<DocsLayout/>}>
          <Route index element={<GettingStarted/>}/>
          <Route path='installation' element={<GettingStarted/>}/>
          <Route path='helloworld' element={<HelloWorld/>}/>

        </Route>
        <Route path='contact' element={<Contact/>}/>
        
        
          
        </Route>
        
      
      
    </Routes>
    
    
    
    </div>

  </BrowserRouter>
  )
    
}



