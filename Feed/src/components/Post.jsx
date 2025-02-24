import { useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        "Good post!"
    ])

    const [newCommentText, setNewCommentText] = useState('')
   
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })
    
    const publishedDateRelatuveToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix:true
    })

    function handleCreateNewComment(event) {
        event.preventDefault();
    
        setComments([...comments, newCommentText])
        setNewCommentText("") //return to blank value
    }

    function handleNewCommentChange(event) {
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("O campo é obrigatório!")
    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })

        setComments(commentWithoutDeletedOne)
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} hasBorder />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelatuveToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == "paragraph") {
                        return <p key={line.content} > {line.content}</p>
                    } else if(line.type == "link") {
                        return <p key={line.content} ><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText} //reflect the change
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={newCommentText.length == 0}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteComment} //function to Comment.jsx
                        />
                    )
                })}
            </div>
        </article>
    )
}