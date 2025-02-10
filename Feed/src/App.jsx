import './global.css'
import styles from './App.module.css'
import { Post } from './Post.jsx'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
          author = "Exemplo Um"
          content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Fusce enim orci, laoreet eu dictum at, dignissim eget dolor. Donec imperdiet dolor ac libero dignissim venenatis."
        />

        <Post
          author = "Exemplo Dois"
          content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin congue sagittis imperdiet. 
          Donec."
        />
        </main>
      </div>
    </div>
  )
}
export default App