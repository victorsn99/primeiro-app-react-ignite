import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(props) {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/victorsn99.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{props.author}</strong>
                            <time title='16 de Outubro de 2023' dateTime='2023-10-16 12:00:00'>1h</time>
                        </div>
                        <button title='Excluir comentário'>
                            <Trash size={22} />
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}