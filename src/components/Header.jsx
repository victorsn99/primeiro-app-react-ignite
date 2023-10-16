import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return(
        <header className={styles.header}>
            <img className={styles.igniteLogo} src={igniteLogo} alt="Logotipo do Ignite" />
            <img className={styles.avatar} alt="Logotipo do Ignite" src='https://github.com/victorsn99.png'/>
            <strong className={styles.userName}>Victor Swoboda</strong>
        </header>
    ) 
}