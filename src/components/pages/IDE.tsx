import { ReactNode, useRef, useState, useEffect } from "react";
import NirgunaEditor from "../editor/NirgunaEditor";
import NavBar from "../NavBar";
import { run } from "nirguna-interpreter/main";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { useLocation } from "react-router-dom";

export default function IDE()
{
    const [showOutput, setShowOutput] = useState(false)
    const [fullScreen, setFullScreen] = useState(false)
    const [output, setOutput] = useState<ReactNode>()
    
    let code = useRef(``);
    const {state} = useLocation()
    let {stateCode} = state ? {stateCode:state.code} : {stateCode: 
`कर्म सूत्र११०(कोशिका, लंबाई){
  
  नित्य नईकोशिका = []। 

  चक्र (मान अ=० । से लंबाई){
    नित्य बाएँ = असत्य। 
    यदि(अ==०)
        {बाएँ = असत्य}
    उत
        {बाएँ=कोशिका[अ- 1]}

    नित्य केंद्र = कोशिका[अ]।
    नित्य दाएँ = असत्य।
    यदि(अ == (लंबाई - 1)) 
    {दाएँ  = असत्य} 
    उत
    {दाएँ=कोशिका[अ+ 1]}

    नित्य नईस्थिति = ((बाएँ और !केंद्र और !दाएँ) या (!बाएँ और केंद्र और दाएँ) या (!बाएँ और केंद्र और !दाएँ) या (!बाएँ और !केंद्र और दाएँ))। 
    नईकोशिका[अ] = नईस्थिति
  }

    नईकोशिका
}

कर्म कोशिकादिखाओ(कोशिका, लंबाई) {
  मान दिखाओ = ""। 
  चक्र (मान  अ = ० । से लंबाई) {
    यदि(कोशिका[अ])
        {दिखाओ = दिखाओ+"●"}
    उत
        {दिखाओ = दिखाओ+" "}
  }
  दिखाओ
}


मान कोशिका= [] । 
मान लंबाई = 100 ।
चक्र(मान अ = ० । से लंबाई)
  {
    कोशिका[अ] = असत्य
  }
  कोशिका[लंबाई/2] = सत्य

लेख(कोशिकादिखाओ(कोशिका, लंबाई))

चक्र (मान अ = 0।  से 50) {
  
  कोशिका = सूत्र११०(कोशिका, लंबाई)

  लेख(कोशिकादिखाओ(कोशिका, लंबाई))
}

`}
    

  function handleSubmitValue(value: string | undefined) {
    if(value)
    {
      code.current = value
    }
    
  }


    return (
        <div className='flex flex-col'>
      
      <div className='flex gap-2  flex-col sm:flex-row sm:justify-between'>
        <div className='sm:w-[74%] h-60 sm:h-[90vh]'><NirgunaEditor defaultValue={stateCode} onCodeValue={handleSubmitValue}/></div>
        <div className='flex flex-col'>
        <button className='rounded-lg hover:bg-slate-700  bg-gray-500 p-2 px-6 border-2' onClick={()=>{
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
            
          <div className=' flex flex-grow  h-[40vh] w-auto '>
            <pre className ='whitespace-pre'>
          {myLogStorage.map((log, index) => 
            
              <p key={index}>{log}</p>
              
            )}
            </pre>
          </div>)
          setShowOutput(true)
        

        }}>Run</button>
        
            
            <div className='h-[84vh] sm:w-[25vw] rounded-lg bg-slate-300 bg-opacity-10 overflow-x-scroll overflow-y-scroll'>
            <TransformWrapper  maxScale={40} minScale={.4}>
          <TransformComponent >
              <div className='h-screen '>
                {output}
              </div>
          </TransformComponent>
        </TransformWrapper>

              </div>
        </div>
        </div>
    </div>
    )
}