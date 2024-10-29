import { useEffect, useRef, useState } from 'react'
import './App.css'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

function App() {
  const newTask = useRef('');
  const STORAGE = 'TODOLIST_APP';

  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE)) || []
  })

  const [taskCompleted, setTaskCompleted] = useState(0) 

  useEffect(() => {
    localStorage.setItem(STORAGE, JSON.stringify(tasks));
    const complete = tasks.filter((item) => item.completed == true).length
    setTaskCompleted(complete)
  }, [tasks])

  function setId() {
      //const jumlahTask = tasks.length;
      //return jumlahTask + 1;

      if (tasks == '') {
        return 1;
      } else {
        return tasks[0].id + 1
      }
  }

  function addTask(event) {
    event.preventDefault()
    if (newTask.current.value == '') {
      alert(`Silahkan masukkan hal yang akan kamu kerjakan`);
      return false
    }
    const data = {
      id: setId(),
      task: newTask.current.value,
      completed: false
    }
    newTask.current.value = ''
    setTasks([...tasks, data])
    //console.log(`saya diklik isi ${newTask.current.value}`)
    //console.log(tasks)
  }

  function setCompleted(id) {
    let taskItem = []
    tasks.map((item, index) => {
      if (item.id == id) {
        //console.log(item)

        taskItem[index] = { ...item, completed: !item.completed }
      } else {
        taskItem[index] = item
      }
    })
    setTasks(taskItem)
    //console.log(tasks)

  }

  function move(currentIndex, updateIndex) {
    //console.log(`${currentIndex} - ${updateIndex}`)

    const currentData = tasks[currentIndex]
    const updateData = tasks[updateIndex]

    tasks[currentIndex] = { ...currentData, id: updateData.id }
    tasks[updateIndex] = { ...updateData, id: currentData.id }

    const newData = [...tasks]
    setTasks(newData)
    //console.log(tasks)
  }

  function remove(id) {
    if (window.confirm('Yakin akan hapus data ini?')) {
      setTasks(tasks.filter((item) => item.id != id))
    }
    //console.log(`id remove ${id}`)
  }

  return (
    <> 
      <Form addTask={addTask} newTask={newTask} taskCompleted={taskCompleted} tasks={tasks} />
      <ToDoList tasks={tasks} setCompleted={setCompleted} move={move} remove={remove} />
    </>
  )
}

export default App