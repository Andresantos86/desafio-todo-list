import { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{   
  placeholder?: string
}

export function Input({ placeholder, ...props }: InputProps) {
  return (
    <input
      className={styles.container} 
      placeholder={placeholder}      
      {...props} />
  )
}