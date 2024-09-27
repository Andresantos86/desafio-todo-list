import { Button } from './components/button/Button'
import { Header } from './components/header/Header'
import { Input } from './components/input/Input'
import { PlusCircle } from 'phosphor-react'
import styles from './App.module.css'
import { TaskListHeader } from './components/task/TaskListHeader'
import { EmptyTask } from './components/task/EmptyTask'
import { Task } from './components/task/Task'
import { ITask } from './@types/Task'
import { useState } from 'react'


function App() {  
  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')
  

  function handleAddTask() {   
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      description: inputValue,
      isChecked: false,
    }
    
    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

 const countCompleTasks = tasks.filter(t=> t.isChecked == true)

 function handleDeleteTask (id:number) {
  const deleteTask = tasks.filter(t => t.id != id)
  setTasks(deleteTask)
 }

 function completedTask (id:number , value:boolean) {  

  const complete = tasks.map(t => {
    if(t.id == id){
      return { ...t, isChecked: value }
    }
    return{...t}
  })
   setTasks(complete)
 }
  return (
    <main>
      <Header />
      <section className={styles.container}>
        <div className={styles.newTask}>
          <Input 
            onChange={(e)=> setInputValue(e.target.value)}
            value={inputValue}/>
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color='#FFFFFF' />
          </Button>
        </div>
        <div className={styles.taskList}>
          <TaskListHeader
            tasks={tasks.length}
            tasksChecked={countCompleTasks.length} />

          {tasks.length > 0 ? <div>
            {tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                completeTask={completedTask}
                deleteTask={handleDeleteTask} />
            ))}
          </div>
            :
            <EmptyTask />}

        </div>
      </section>
    </main>

  )
}

export default App
