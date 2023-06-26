import { Link, useNavigate } from 'react-router-dom'
import NirgunaEditor from '../editor/NirgunaEditor'
import { useRef } from 'react'

export default function Home()
{
    const code = useRef<string>(
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

`)
    const codeNav = useNavigate()
    function handleCode(value: string | undefined)
    {
        code.current = value || ''
    }
    return (
        <div className="flex flex-col">
            <img className="z-[-100] absolute h-[148vh] w-screen object-cover" src='https://th.bing.com/th/id/OIG.CnfXSnuHkXO0Ex4BoQNN?pid=ImgGn'/>
            <div className='flex  sm:max-w-screen  self-center mt-[15vh]  font-mono '>
                <div className='flex flex-col '>
                    <div className='text-center max-w-4xl text-6xl mb-4 sm:text-6xl'>
                        A Devanagari Scripting language
                    </div>
                    
                    <div className='text-center max-w-4xl mb-2'>
                        Nirguna is an devnagari scripting language built for educational and research purposes.
                        Its not production ready but can be used to build small programs.
                    </div>
                    <div className='flex sm:flex-row flex-col  justify-center gap-4'>
                        <button className='self-center py-4 px-10 border-2 rounded-full hover:bg-gray-800 bg-slate-100 text-blue-700'><Link to='https://github.com/shikharmishra1/Nirguna/releases/' target="_blank" rel="noopener noreferrer">Download</Link></button>
                        <div className='sm:mt-5  text-center'>OR</div>
                        <div className='flex self-center p-[0.10rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            <div className='p-4 flex  bg-gray-700'>
                                <div> &gt; npm i nirguna-interpreter</div>
                                <button onClick={()=>{
                                    navigator.clipboard.writeText("npm i nirguna-interpreter")
                                    
                                    }} className="block ml-2 bg-gray-700 transition hover:scale-110 active:scale-100 active:transition-none" title="Copy to clipboard">
                                <svg className="w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                </svg>
                            </button>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                    <div className='text-center mt-5'>OR</div>
                    <div className='rounded-lg mt-5 sm:w-full w-screen h-[600px]' ><NirgunaEditor defaultValue={code.current} onCodeValue={handleCode} /></div>
                    <div onClick={()=>{
                        codeNav('/Nirgunawebapp/ide/', {state: {code: code.current}})
                    }} className='flex justify-center'><button className='border-2 text-orange-600 py-2 px-8 hover:bg-teal-800 bg-opacity-50 rounded-lg bg-teal-800 mt-5 text-bold '>Run</button></div>
                </div>
                
            </div>

            
            
        </div>
    )
}