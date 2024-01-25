import Avatar from '../Avatar'
import Comment from '../Comment'
import styles from './styles.module.css'

export default function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/Freirelf.png" alt="Imagem de perfil"/>
          <div className={styles.authorInfo}>
            <strong>Lucas Freire</strong>
            <span>Web developer</span>
          </div>
        </div>

        <time title='11 de janeiro as 17:34' dateTime='2024-01-23 17:34:29'>publicado há 1h</time>
      </header>
        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>
            Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz para uma clínica.. O nome do projeto é Centro clínica 🚀
          </p>
          <p>👉 freirelf.design/centroclinica</p>
          <p>
            <a href="#">#html </a>
            <a href="#">#css </a>
            <a href="#">#javascript </a>
            </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea placeholder='Deixe um comentário'/>

          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>

    </article>
  )
}