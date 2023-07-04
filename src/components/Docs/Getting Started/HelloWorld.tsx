
import DocsIDE from "../DocsIDE";

export default function HelloWorld()
{
    const paraClass = "text-gray-400"
    return (
        <div className="mt-3 flex flex-col gap-4">
            <h1 className="mb-3 font-bold text-4xl">नमस्कार जगत्</h1>
            <p className={paraClass}>
            यह अनुभाग आपको वह सभी तरीके बताएगा जिससे आप आउटपुट स्क्रीन पर नमस्कार जगत् का लेख कर सकते हैं।  
            </p>

            <h3 className="mb-3 font-bold text-2xl">प्रत्यक्ष मार्ग</h3>
            <DocsIDE defaultCode={`लेख("नमस्कार जगत्")`}/>
            <h3 className="mb-3 font-bold text-2xl">मान (Variable) मार्ग</h3>
            <div className="flex gap-2 ">
                Note:<p className={paraClass+' text-sm self-center'}>
                यद्यपि आप इसके लिए मान का उपयोग कर सकते हैं लेकिन जिन मूल्यों को बदला नहीं जा सकता, उनका उपयोग करते समय नित्य ( नित्य वाक्य="नमस्कार जगत्" । ) का उपयोग करना ज्यादा उचित रहेगा ।
                </p>
            </div>
            <DocsIDE defaultCode={`मान वाक्य="नमस्कार जगत्" ।\nलेख(वाक्य)`}/>
                
            
        </div>
    )
}