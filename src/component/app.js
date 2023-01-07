import React, { useCallback, useState } from 'react'
import Header from "./header.js"
import Footer from "./footer.js"
import Box from "./note.js"
import info from "../info.js"
import Input from "./input.js"



function createNote(noteItem){
    return <Box Title = {noteItem.Title}
    Note = {noteItem.Note}/> 
}



function Main(){
    const [notes,setNote] = useState([]);

function addNote(note){
    setNote(prevNote=>{
        return[
            ...prevNote,note
        ];
    });
}

    return (<div className = "header">
    <Header/>
    <Input onAdd={addNote}/>
    <div className="noteMain">
    {notes.map(createNote)}
    </div>
    <Footer/> 
    </div>
    );
}

export default Main;