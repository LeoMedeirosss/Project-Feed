import styles from "./Comment.module.css"
import { ThumbsUp } from "phosphor-react"
import { Trash } from "phosphor-react"
import { Avatar } from "./Avatar"
import { useState } from "react"

export function Comment({content, onDeleteComment}) {

    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)

    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar src="https://github.com/Rafael1.png" hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Raphael Jesus</strong>
                            <time datetime="2024-11-11 11:11:11">Cerca de 1 hora atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={25} />
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