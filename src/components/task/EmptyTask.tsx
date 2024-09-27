import styles from './EmptyTask.module.css'
import tarefaLogo from '../../assets/clipboard.png'

export function EmptyTask () {
  return (
    <div className={styles.container}>
      <img src={tarefaLogo} alt="Icone de tarefas" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}