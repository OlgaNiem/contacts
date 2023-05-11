import styles from './Modal.module.css'
import { ReactNode } from "react"
import cn from 'classnames'


export type ModalProps = {
    open: boolean, // if, else ; ? :
    onClose: () => void,
    children?: ReactNode
}

export default function Modal({open, onClose, children}: ModalProps){
    return (
        //className={styles.background + ' ' + (open ? styles.open : '')}
      <div 
      onClick={onClose}
      className={cn(
        styles.background,
        {[styles.open]: open}
      )}>
        <div onClick={e => e.stopPropagation()} className={styles.box}>
            {children}
        </div>
      </div>
    );
  }