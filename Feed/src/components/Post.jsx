import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/Wellington.png" hasBorder/>
                    <div className={styles.authorInfo}>
                        <strong>Rafael Lima</strong>
                        <span>Mobile developer</span>
                    </div>
                </div>

                <time dateTime="2025-02-02 09:40:13">Publicado há 2hrs</time>
            </header>
            <div className={styles.content}>
                <p>Lorem Ipsum!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<a href='#'>Suspendisse lacinia</a> purus mi, rhoncus consequat quam efficitur vel. In varius nunc massa, at condimentum quam feugiat quis. Curabitur semper.</p>
                <p>Lorem ipsum dolor sit amet. Maecenas posuere imperdiet eros at lobortis.</p>
                <p>Sed lobortis eros nec lacus cursus auctor. Etiam purus purus, efficitur sit amet <a href='#'>vehicula</a>.</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>

        </article>
    )
}