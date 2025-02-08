import { Post } from './Post.jsx'
import { Header } from './components/Header.jsx'

import './styles.css'

function App() {
  return (
    <div>
      <Header/>

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
    </div>
  )
}
export default App