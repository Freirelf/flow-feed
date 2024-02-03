import Avatar from '../Avatar'
import Comment from '../Comment'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.css'
import { useState } from 'react'


export default function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
      'Uau, que post incrível!'
  ])

  const [newCommentText, setNewCommentText ]= useState('')

  const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)

    event.target.setCustomValidity('')
  }

  function handleNewCommentChangeRequired() {
    event.target.setCustomValidity("Esse campo é obrigatório")
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })
    setComments(commentsWithoutDeleteOne)
  }

  const isNewCommentEmpty = newCommentText.length == 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="Imagem de perfil"/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
        <div className={styles.content}>
          {content.map(item => {
            if (item.type === 'paragraph') {
              return <p key={item.content}>{item.content}</p>
            } else if (item.type === 'link') {
              return <p key={item.content}><a href="">{item.content}</a></p>
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea 
            name='comment'
            placeholder='Deixe um comentário'
            value={newCommentText}
            onChange={handleNewCommentChange}
            required
            onInvalid={handleNewCommentChangeRequired}
          />

          <footer>
            <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
          </footer>
        
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return <Comment content={comment} key={comment} onDeleteComment={deleteComment} />
          })}
        </div>

    </article>
  )
}