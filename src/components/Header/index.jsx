import styles from './styles.module.css'

import flowIgnite from '../../assets/flow-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img  src={flowIgnite} alt=" Logo do Flow feed" />
    </header>
  )
}