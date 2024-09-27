import styles from './TaskListHeader.module.css'

interface TaskListHeaderProps {
  tasks: number
  tasksChecked: number
}

export function TaskListHeader ({
  tasks = 0, 
  tasksChecked = 0 }:TaskListHeaderProps) {
  return( 
    <header className={styles.container}>
      <aside className={styles.content}>
        <p>Tarefas criadas</p>
        <span>{tasks}</span>
      </aside>
      <aside className={styles.content}>
        <p>Concluidas</p>
        <span>{tasks == 0 ? tasks : `${tasksChecked} de ${tasks}`}</span>
      </aside>
    </header>
  )
}