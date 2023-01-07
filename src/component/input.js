import react,{useState} from "react"

function Input(props){
    const [note,setNote] = useState({
        Title:"",
        Note:"",
    });

    function handleChange(event){
        const{name,value} = event.target;
        setNote(prevNote=>{
            return{
             ...prevNote,
            [name]: value
        };
        });
    }
    function handleClick(event){
     event.preventDefault(); 
     props.onAdd(note);
    
    }
    return (
        <form className="inputBox">
        <input className= "inputField" id="Title" onChange={handleChange} value={note.Title}  name = "Title" placeholder= "Enter the title of note"/>
        <input className= "inputField" id="Note"  onChange={handleChange} value={note.Note} name = "Note" placeholder="Enter the note" />
        <input className="plus" type="submit" onClick={handleClick} value="+"/>
        </form>         
        
    )
}

export default Input;