import { ReactNode } from "react"
import styles from './Container.module.css'

export type ContainerProps = {
    children: ReactNode
}

export default function Container({children}: ContainerProps){
    return (
      <div className={styles.container}>
        {children}
      </div>
    )
  }