import ToDoListButton from "./ToDoListButton"
import { FcCheckmark } from "react-icons/fc"
import { IoIosRadioButtonOff } from "react-icons/io"


function ToDoList(props) {
    //console.log(props.tasks)
    props.tasks.sort((a, b) => b.id - a.id)
    return (
        <div className="wrapper">
            <ul>
            {
                props.tasks.map((item) => {
                    let radioCompleted = '';
                    let classCompleted = '';
                    if (item.completed == false) {
                        radioCompleted = <IoIosRadioButtonOff/>;
                    } else {
                        radioCompleted = <FcCheckmark />;
                        classCompleted = 'strike';
                    }
                    return (
                        <li key={item.id}>
                            <div className='left'><button onClick={() => props.setCompleted(item.id)}>{radioCompleted}</button></div>
                            <div className={`center ${classCompleted}`}>{item.task} </div>
                            <div className='right'>
                                <ToDoListButton id={item.id} tasks={props.tasks} move={props.move} remove={props.remove}/>
                        </div>
                    </li>
                    )
                })
            }    
            </ul>
        </div>
    )
}

export default ToDoList