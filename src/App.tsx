
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IDE from './components/pages/IDE'
import Home from './components/pages/Home'
import NavBar from './components/NavBar'


export default function App() {

  return(
    <BrowserRouter >
    <div className='flex flex-col'>
    <NavBar/>
    <Routes>
      
      <Route path='/Nirgunawebapp' >
        <Route index element={<Home/>}/>
        <Route path='ide' element={<IDE/>}/>
        <Route path='home' element={<Home/>}/>
        
      </Route>
    </Routes>
    </div>
  </BrowserRouter>
  )
    
}



