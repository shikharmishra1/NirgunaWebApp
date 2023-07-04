import { useEffect, useState } from 'react'
import logo from '../assets/nirguna_logo.jpg'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const myHistory = useLocation()
  const [showMenu, setShowMenu] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const paths:Map<string,number> = new Map([
    ['home', 0],
    ['docs', 1],
    ['ide', 2],
    ['contact', 3]
  ]
  )

  useEffect(()=>{
    const path = myHistory.pathname.split('/')[2]
    if(path)
    {
      setActiveIndex(paths.get(path) as number)
    }
  }
    ,[])

  function toggleClass(index:number){
    setActiveIndex(index)
  }

  function NavItems()
  {
    const currentPageClass = 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
    const otherPageClass = 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
    
    return (<div className="items-center justify-between w-full flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col w-[calc(100vw-2rem)] md:w-full p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to='/Nirgunawebapp' onClick={()=>{toggleClass(0)}}  className={activeIndex===0?currentPageClass:otherPageClass} >Home</Link>
      </li>
      <li>
        <Link to='/Nirgunawebapp/docs' onClick={()=>{toggleClass(1)}} className={activeIndex===1?currentPageClass:otherPageClass}>Docs</Link>
      </li>
      <li>
      <Link to='https://github.com/shikharmishra1/Nirguna/' target='_blank' rel="noopener noreferrer" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Github</Link>
      </li>
      <li>
        <Link to='/Nirgunawebapp/contact' onClick={()=>{toggleClass(3)}} className={activeIndex===3?currentPageClass:otherPageClass}>Contact</Link>
      </li>
    </ul>
  </div>)
  }
  
  
    //create a navbar component
    return (
       
      
<nav className="bg-white dark:bg-gray-900  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to="/Nirgunawebapp"  className="flex items-center">
      <img src={logo} className="h-8 mr-3" alt="Nirgua Logo"/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nirguna</span>
  </Link>
  <div className="flex md:order-2">
      <Link to='/Nirgunawebapp/ide'><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Online IDE</button></Link>
      <button onClick={()=>{setShowMenu(!showMenu)}} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  {showMenu?<div className='w-full block md:w-auto '><NavItems/></div>:<div className='hidden md:block'><NavItems/></div>}
  </div>
</nav>


    )
}


