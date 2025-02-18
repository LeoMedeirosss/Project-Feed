import styles from "./Comment.module.css"
import { ThumbsUp } from "phosphor-react"
import { Trash } from "phosphor-react"
import { Avatar } from "./Avatar"

export function Comment(props) {
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
                        <button title="Deletar Comentário">
                            <Trash size={25} />
                        </button>

                    </header>
                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Curtir <span>29</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}