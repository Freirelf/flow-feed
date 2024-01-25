import { HandsClapping, Trash } from 'phosphor-react'
import styles from './styles.module.css'
import Avatar from '../Avatar'

export default function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/devon.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Devon Marlon</strong>
              <time title='11 de janeiro as 17:34' dateTime='2024-01-23 17:34:29'>Comentado há 1h</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={22}/>
            </button>
          </header>

          <p>Muito bom Lucas, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <HandsClapping />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}