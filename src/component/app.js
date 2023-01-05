import React from 'react'
import Header from "./header.js"
import Footer from "./footer.js"
import Box from "./note.js"
import info from "../info.js"
import Input from "./input.js"



function createNote(noteItem){
    return <Box title = {noteItem.title}
    content = {noteItem.content}/> 
}


function Main(){
    return (<div className = "header">
    <Header/>
    <Input/>
    <div className="noteMain">
    {info.map(createNote)}
    </div>
    <Footer/>
    </div>
    );
}

export default Main;