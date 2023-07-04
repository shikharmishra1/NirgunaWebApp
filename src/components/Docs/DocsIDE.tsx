
import { run } from "nirguna-interpreter/main";
import { ReactNode, useRef, useState } from "react";
import NirgunaEditor from "../editor/NirgunaEditor";
import { Transition } from "@headlessui/react";



export default function DocsIDE(props:{defaultCode?:string})
{
    const [showOutput, setShowOutput] = useState(false)
    const [output, setOutput] = useState<ReactNode>()
    const code = useRef(``)

    return (
        <div className="flex lg:flex-row flex-col gap-2 ">
            <div className="flex flex-col md:w-[30rem] w-[70vw] relative">
                <button onClick={()=>{
                    setShowOutput(true)
                    const customLog = (...args: any[]) => {
            
                        myLogStorage.push(args);
                        // Custom logic for handling the log message
                        // ...
                      
                        // Call the original console.log method with the arguments
                        consoleLog.apply(console, args);
                      };
                      const consoleLog = console.log;
                      console.log = customLog;
                      const myLogStorage: any[] = [];
                      run(code.current);
                      
                      setOutput(
                        
                      <div className=' flex  flex-grow w-auto '>
                        <pre className ='whitespace-pre'>
                      {myLogStorage.map((log, index) => 
                        
                          <p className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500" key={index}>{log}</p>
                          
                        )}
                        </pre>
                      </div>)
                      
                    
            
                        
                    
                }} className="z-[1000] absolute hover:h-[1.4rem] hover:w-[1.4rem] hover:bg-gradient-to-br rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  top-[0.1rem] hover:cursor-pointer self-end right-[2px] h-5 w-5 ">
                    <svg   xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                    </svg>
                </button>
                    <div className=" flex flex-col  md:w-[30rem] w-[70vw] h-[150px] self-start p-[0.10rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <NirgunaEditor defaultValue={props.defaultCode} onCodeValue={(v)=>{code.current=v?v:'निर्गुण'}}/>
                    
                    
                    </div>
                </div>
            <Transition
                show={showOutput}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
            
            <div className='z-[100]  relative min-h-[150px]   max-w-[70vw] md:max-w-[480px] lg:w-[350px] w-auto bg-gradient-to-r p-[0.1rem] flex flex-col from-pink-500/20 via-purple-500/20 to-indigo-500/20'>      
                <div onClick={
                    ()=>{
                        setShowOutput(!showOutput)
                    }
                } className="absolute  self-end hover:text-lg hover:cursor-pointer  text-right">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                    </svg>
                </div>
                <div className='max-h-[148px] sm:w-[25vw] rounded-lg bg-opacity-10 overflow-x-scroll overflow-y-scroll'>
                
                    {/*<div className="z-[1000]  hover:h-[1.4rem] hover:w-[1.4rem] hover:bg-gradient-to-br rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative top-[-144px] hover:cursor-pointer self-end right-[2px] h-5 w-5 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                        </svg>
                    </div>*/}
                    <div className=''>
                    
                        {output}
                        
                    </div>

                </div>
            </div>
            </Transition>
        </div>
    )
}