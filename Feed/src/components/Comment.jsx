import styles from "./Comment.module.css"
import { ThumbsUp } from "phosphor-react"
import { Trash } from "phosphor-react"

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/LeoMedeirosss.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Raphael Jesus</strong>
                            <time datetime="2024-11-11 11:11:11">Cerca de 1 hora atrás</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={20} />
                        </button>

                    </header>
                    <p>Ut tempus metus et vestibulum!!!</p>
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