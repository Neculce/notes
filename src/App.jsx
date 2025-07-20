import { useState } from 'react'
import React from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import Nlist from './components/Nlist';
import Neditor from './components/Neditor'
import { FetchableDevEnvironment } from 'vite';


function App(){

    const [notes, setNotes] = useState([]);
    
    {/*State to hold notes*/}

    const onSaveNote = ()=>{
        console.log("Note saves");

        const newNote = {
            id: crypto.randomUUID(),
            title: "Untitled Note",
            description: "A small description of this note",
            content: "Seems empty for now",
            LastModified: Date.now(),

        };

        setNotes([newNote, ...notes]);


    };

    return (
    <div className="flex-col items-center justify-center min-w-screen min-h-screen bg-gray-100">

        <div className="">
            <HeaderComponent /> 
        </div>

        <div>

            <div className="">  
                <Nlist  notes={notes} /> {/* Notes are getting passed as props to the listing component */}
            </div>

            <div>
                <Neditor onSaveNote={onSaveNote}/> {/*the function gets passed as a prop to the editor component to call it on save.*/}
            </div>
        </div>

    </div>
  )


}

export default App
