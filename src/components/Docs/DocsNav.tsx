import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

//@ts-ignore
export default function DocsNav(props:{handleClick?:(index:number)=>void})
{
    const myHistory = useLocation()
    const [currentIndex, setCurrentIndex] = useState(0)
    const paths:Map<string,number> = new Map([
        ['installation', 0],
        ['helloworld', 1],
        
      ]
      )
    
      useEffect(()=>{
        const path = myHistory.pathname.split('/')[3]
        if(path)
        {
          setCurrentIndex(paths.get(path) as number)
        }
      }
        ,[])

    const currentClass = "block border-l pl-4 -ml-px text-sky-500 border-current font-semibold dark:text-sky-400"
    const otherClass = "block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
    function toggleClass(index:number){
        setCurrentIndex(index)
    }
    return (
    
        <div className=" lg:block flex z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
            <nav className=" lg:text-sm  lg:leading-6 relative">
                <ul className="">
                    <li className="mt-12 lg:mt-8">
                        <h5>आरम्भ</h5>
                        <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                            <li>
                                <Link to='./installation' onClick={()=>toggleClass(0)} className={currentIndex===0?currentClass:otherClass}>
                                    स्थापना (Installation)
                                </Link>
                            </li>
                            <li>
                                <Link to='./helloworld' onClick={()=>{toggleClass(1)

                                }} className={currentIndex===1?currentClass:otherClass}>
                                    नमस्कार जगत् (Hello World)
                                </Link>
                            </li>
                        </ul>
            
                    </li>
                </ul>
            </nav>
        </div>
    )
}