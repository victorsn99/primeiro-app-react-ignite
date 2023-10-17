import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src='https://github.com/victorsn99.png' />
                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>{props.position}</span>
                    </div>
                </div>

                <time title='16 de Outubro de 2023 às 15:37' dateTime='2023-10-16'>Publicado há 1 hora</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href=''>jane.design/doctorcare</a></p>

                <p><a href=''>#novoprojeto</a> <a href=''>#nlw</a> <a href=''>#rocketseat</a></p>
            </div>

            <form action="" method="post" className={styles.commentForm}>
                <strong>Deixe um Comentário</strong>
                <textarea placeholder='Deixe um Comentário'/>
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment author="Victor Swoboda" content="Muito Bom! Parabéns!"/>
                <Comment author="Victor Swoboda" content="Essa realmente é a melhor forma de fazer isso!"/>
            </div>

        </article>
    )
}