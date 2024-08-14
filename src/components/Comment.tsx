import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import {Avatar} from './Avatar'
import { useState } from "react"

interface CommentProps {
  content: string
  onDeleteComment: (content: string) => void
}

export function Comment ({content, onDeleteComment}: CommentProps) {

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    // setLikeCount(likeCount + 1)
    setLikeCount((state) => {
      return state + 1
    })
    // likeCount tem o valor anterior, ele só vai ter o novo valor quando renderizado
    console.log(likeCount)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/tiagomartinscc.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Tiago Martins</strong>
              <time 
                title="10 de agosto de 2024 às 12:06:55" 
                dateTime="2024-08-10 12:06:55">
                  Cerca de há 1 hora atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar Comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}