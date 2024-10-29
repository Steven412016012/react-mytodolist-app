import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

function ToDoListButton(props) {
    let id = props.id;
    let currentIndex = props.tasks.findIndex((item) => item.id == id) //erorrrr
    //console.log(currentIndex)
    let prevIndex = currentIndex - 1;
    let nextIndex = currentIndex + 1;

    let prevButton = '';
    if(props.tasks[prevIndex] != undefined){
        prevButton = <FaAngleUp /> 
    }else{
        prevIndex = '';
    }

    let nextButton = '';
    if(props.tasks[nextIndex] != undefined){
        nextButton = <FaAngleDown /> 
    }else{
        nextIndex = '';
    }

    return (
        <>
            <span><button onClick={()=>props.move(currentIndex, prevIndex)}>{prevButton} </button></span>
            <span><button onClick={()=>props.move(currentIndex, nextIndex)}>{nextButton}</button></span>
            <span><button onClick={()=>props.remove(props.id)}><FaTrash /></button></span>
        </>
    )
}

export default ToDoListButton