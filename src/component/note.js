import react from "react"
 
function box(props){
    return(
        <div className="box">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default box;