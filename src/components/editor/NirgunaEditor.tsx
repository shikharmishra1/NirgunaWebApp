import React, { useEffect } from 'react';
import  Editor, {useMonaco} from '@monaco-editor/react';
export default function NirgunaEditor() { 
  const monaco = useMonaco();
  const [showEditor, setShowEditor] = React.useState(false);
  
  useEffect(()=>{
    if(monaco) 
    {
      setShowEditor(true);
    monaco.editor.defineTheme("myCustomTheme", {
      base: "vs-dark", // can also be vs-dark or hc-black
      inherit: true, // can also be false to completely replace the builtin rules
      rules: [
        {token: 'identifier', foreground: '0088cc'},
        {token: 'comment', foreground: '00ff00', fontStyle: 'bold'},
        {token: 'keyword', foreground: 'ff6600', fontStyle: 'bold'},
        {token: 'function-call', foreground: 'ffff99', fontStyle: 'bold'},
        {token: 'operator', foreground: 'cc0099', fontStyle: 'bold'},
        
      ],
      colors: {
        
      }
      });
    monaco.languages.register({ id: 'nirguna' });
    

    

    monaco.languages.setMonarchTokensProvider('nirguna', {
      
      keywords:["मान",
      "निर्गुण",
      "नित्य",
      "कर्म",
      "वापस",
      "खंडन",
      "चालू",
      "यदि",
      "उत",
      "उत यदि",
      "चक्र",
      "से",
      "तक",
      "जब",
      "सत्य",
      "असत्य" ],
      operators: [
        '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
        'और', 'या', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
        '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
        '%=', '<<=', '>>=', '>>>='
      ],
      exclude: 
      [
        'चक्र', 'यदि'
      ],
      // we include these common regular expressions
      symbols:  /[=><!~?:&|+\-*\/\^%औरया]+/,

      escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,

      tokenizer: {

        
        root: [
          [/(?![चक्र,यदि])([\u0900-\u097F]+)\s*\(/, { token: 'function-call', bracket: '@open', next: '@functionCall' }],

          [/(?!या|और | यदि  )[\u0900-\u0965]+/g, {
            cases: {
              '@keywords': 'keyword',
              '@default': 'identifier',
               
              
            }
          
          }],
          [/[\u0966-\u096F0-9]/g, 'number'],

          // whitespace
          { include: '@whitespace' },
          
          //brackets
          [/[{}()\[\]]/, '@brackets'],
          [/[<>](?!@symbols)/, '@brackets'],

          //operators
          [/@symbols/, { cases: { '@operators': 'operator',
                              '@default'  : '' } } ],

          
          // strings
          [/"([^"\\]|\\.)*$/, 'string.invalid' ],  // non-teminated string
          [/"/,  { token: 'string.quote', bracket: '@open',  next:'@string'} ],
          
          // characters
          [/'[^\\']'/, 'string'],
          [/(')(@escapes)(')/, ['string','string.escape','string']],
          [/'/, 'string.invalid'],

          

          
          

          
          

        ],
        string:[
          [/[^\\"]+/,  'string'],
          [/@escapes/, 'string.escape'],
          [/\\./,      'string.escape.invalid'],
          [/"/,        { token: 'string.quote', bracket: '@close', next: '@pop' } ]

        ],
        

        whitespace: [
          [/\s+/, 'white'],
          [/(^#.*$)/, 'comment'],
          [/('''.*''')|(""".*""")/, 'string'],
          [/'''.*$/, 'string', '@endDocString'],
          [/""".*$/, 'string', '@endDblDocString']
        ],
        endDocString: [
          [/\\'/, 'string'],
          [/.*'''/, 'string', '@popall'],
          [/.*$/, 'string']
        ],
        endDblDocString: [
          [/\\"/, 'string'],
          [/.*"""/, 'string', '@popall'],
          [/.*$/, 'string']
        ],
        functionCall: [
          // Match nested parentheses
          [/\(/, { token: 'function-call', bracket: '@open', next: '@functionCall' }],
          [/\)/, { token: 'function-call', bracket: '@close', next: '@pop' }],
          // Match other tokens inside the parentheses
          { include: '@root' }
        ],
        
        
        
      },
      

      unicode: true
    });
    
    
   } 
   else
    {
      setShowEditor(false);
      console.log("monaco not available");
    }
  }, [monaco]);
  

  return showEditor?<Editor width="70vw" height="90vh" defaultValue="// some comment" theme='myCustomTheme' language='nirguna' />:<div>loading...</div>;
}