import { Editor } from "@monaco-editor/react"
import { Link } from "react-router-dom"

export default function GettingStarted()
{
    const paraClass = "text-gray-400 "
    return(
        <div className="mt-3 flex flex-col gap-4">
            <h1 className="mb-3 font-bold text-4xl">आरंभ</h1>
            <p className={paraClass}>
                निर्गुणा एक देवनागरी प्रक्रियात्मक (Procedural) स्क्रिप्टिंग भाषा है।  
            </p>
            <h2 className={"mb-1 font-bold text-2xl "}>स्थापना</h2>
            <p className={paraClass}>निर्गुण को स्थापित करने का सबसे आसान तरीका, <Link to='https://github.com/shikharmishra1/Nirguna/releases/' target='_blank' rel="noopener noreferrer"  className="underline underline-offset-4 text-slate-300 font-bold">स्थायी निष्पाद्य (standalone)</Link> प्रोग्राम का उपयोग करना है। <br/> स्थापना करने के बाद, 
            <div className="flex">
            <div className=' self-center p-[0.10rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='p-3 flex justify-start bg-gray-700'>
                <div> &gt; nirgunai &lt;file-name&gt;</div>
                <button onClick={()=>{
                    navigator.clipboard.writeText("nirgunai <file-name>")
                    
                    }} className="block ml-2 bg-gray-700 transition hover:scale-110 active:scale-100 active:transition-none" title="Copy to clipboard">
                <svg className="w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                </button>
            </div>
            </div>
            </div>

             कमांड चलाएं।</p>
             <p className={paraClass}><span className="font-bold text-white">Note:</span> Nirgunai कमांड को काम करने के लिए या तो समान निर्देशिका (same directory) में प्रोग्राम (nirgunai executable) फ़ाइल रखें या <Link to='https://superuser.com/questions/284342/what-are-path-and-other-environment-variables-and-how-can-i-set-or-use-them' target='_blank' rel="noopener noreferrer"  className="underline underline-offset-4 text-slate-300 font-bold">Path Environment Variable </Link>सेट करें । </p>
            
            <h2 className="font-bold text-lg">NPM उपयोग करके</h2>
            <p className={paraClass}>निर्गुण इंटरप्रिटर को निष्पादित करने के लिए निम्न कमांड का उपयोग करें।
            
                <div className="flex my-4">
                <div className=' self-center p-[0.10rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <div className='p-3 flex justify-start bg-gray-700'>
                    <div> &gt; npm i nirguna-interpreter</div>
                    <button onClick={()=>{
                        navigator.clipboard.writeText("nirgunai <file-name>")
                        
                        }} className="block ml-2 bg-gray-700 transition hover:scale-110 active:scale-100 active:transition-none" title="Copy to clipboard">
                    <svg className="w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    </button>
                </div>
                </div>
                </div>
                उसके बाद आप निर्गुण-इंटरप्रिटर को अपने javascript परियोजना मे उपयोग कर सकते हैं।
            </p>
            <p>
                उदाहरण
            </p>
            <div className="md:w-[30rem] w-[70vw] h-[150px] self-start p-[0.10rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <Editor   defaultLanguage="javascript" defaultValue={
`import {run} from 'nirguna-interpreter'
let code = 
\`मान अ = "नमस्ते भारत"
लेख(अ)
\`
run(code)
`               }  theme='vs-dark'></Editor>
            </div>
            
            

        </div>


    )
}