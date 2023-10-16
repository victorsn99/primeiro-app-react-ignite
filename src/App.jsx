import { Post } from './components/Post';
import { Header } from './components/Header';

import './global.css';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author = "Victor Swoboda" content="" position="Web Developer" postTimestamp="2023-10-16 12:00:00"></Post>
          <Post author = "Gabriel Brito" content="" position="Electricist Engineer" postTimestamp="2023-10-16 12:00:00"></Post>
        </main>
      </div>

    </div>
  )
}