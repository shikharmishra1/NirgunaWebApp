import React from 'react'
import Navbar from './components/NavBar'


export default function Layout(props:any)
{
    return(
    <div>
      <Navbar />
      <div>{props.children}</div>
    </div>
    ) 
    
}