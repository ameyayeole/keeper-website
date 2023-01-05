import react from "react"

function input(){
    return (
        <div className="inputBox">
        <input className= "inputField" id="Title" placeholder= "Enter the title of note"></input>
        <input className= "inputField" id="Note"  placeholder="Enter the note" ></input>
        <button className="plus">+</button>
        {/* <p className="plus">+</p> */}
        </div>         
        
    )
}
export default input;