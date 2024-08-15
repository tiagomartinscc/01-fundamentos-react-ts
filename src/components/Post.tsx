import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import styles from "./Post.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface AuthorProps {
  name: string
  role: string
  avatarUrl: string
}

interface ContentProps {
  type: 'paragrapher' | 'link'
  content: string
}

interface PostProps {
  author: AuthorProps
  publishedAt: Date
  content: ContentProps[]
}

export function Post({author, content, publishedAt}: PostProps) {
  const publishedDateFormatted = format(
    publishedAt, 
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR
    }
  )

  const publshedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Este campo é obrigatório!")
  }
  
  const [comments, setComments] = useState(['Post muito bacana hein!?'])
  const [newCommentText, setNewCommentText] = useState('')

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
    setComments(commentsWithoutDeletedOne)
  }

  const isNewEmptyContent = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time 
          title={publishedDateFormatted} 
          dateTime={publishedAt.toISOString()}>
            {publshedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === 'paragrapher') {
            return <p key={index}>{line.content}</p>
          }
          if (line.type === 'link') {
            return <p key={index}><a href="#"> {line.content} </a></p>
          }
          return null
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          placeholder="Deixe um comentário..."
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewEmptyContent}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments.map(comment => {
            return (
              <Comment 
                key={comment}
                content={comment}
                onDeleteComment={deleteComment}
              />
            )
          })
        }
      </div>
    </article>
  )
}