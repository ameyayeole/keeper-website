import react from "react"
 
function box(props){
    return(
        <div className="box">
            <h3>{props.Title}</h3>
            <p>{props.Note}</p>
        </div>
    )
}

export default box;