import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  chindren?: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className={styles.container}
      {...props}>
      {children}
    </button>
  )
}