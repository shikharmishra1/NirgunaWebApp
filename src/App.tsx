import { useEffect, useState } from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react'
import './App.css'
import NirgunaEditor from './components/editor/NirgunaEditor'

function App() {
  return <div>
    <NirgunaEditor/>
    </div>
}


export default App
