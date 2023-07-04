import { Outlet } from "react-router-dom";
import DocsNav from "./DocsNav";

import { useState } from "react";

export default function DocsLayout()
{
    const [showMenu, setShowMenu] = useState(false)
    
    //vertical tabs for docs
    return(
        
        <div className='md:flex bg-gradient-to-tr from-gray-700 via-gray-800  to-gray-950'>
            
            
            <button onClick={()=>{
                setShowMenu(!showMenu)
            }} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div className="md:block hidden">< DocsNav/></div>
            {showMenu?<div className="absolute h-[100%] z-50 top-0 bg-cyan-950">
                
                <button onClick={()=>{
                    setShowMenu(false)
                }} type="button" className="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"><span className="sr-only">Close navigation</span><svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible"><path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg></button>
                    < DocsNav/>
                
                </div>:null}
            <div className="md:ml-0 md:mr-0 mr-4 ml-4"><Outlet/></div>
            
            </div>
        )
}