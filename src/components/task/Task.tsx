import styles from './Task.module.css'
import { Check, Trash } from "phosphor-react"
import { ITask } from "../../@types/Task"

interface TaskProps {
  task: ITask
  deleteTask: (id: number) => void
  completeTask: (id: number, value: boolean) => void
}

export function Task({ task, completeTask, deleteTask }: TaskProps) {

  function handleTaskCompleted() {    
    completeTask(task.id,!task.isChecked)
  }

  function handleDeleteTask() {    
    deleteTask(task.id)
  }

  const classNameCheck = task.isChecked
    ? styles['checkbox-checked']
    : ''
  const classNameDescriptionCheck = task.isChecked
    ? styles['description-checked']
    : ''

  return (
    <article className={styles.container}>
      <label htmlFor={"checkbox"+task.id} >
        <input
          type="checkbox"
          id={"checkbox"+task.id}
          checked={task.isChecked}
          onClick={handleTaskCompleted}
        />
        <span className={`${styles.checkbox} ${classNameCheck}`}>
          {task.isChecked && <Check size={12} />}
        </span>
        <p className={`${styles.description} ${classNameDescriptionCheck}`}>{task.description}</p>
      </label>
      <button onClick={handleDeleteTask}>
        <Trash size={16} className={styles.trashIcon} />
      </button>
    </article>
  )
}