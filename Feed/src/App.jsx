import './global.css'
import styles from './App.module.css'

import { Post } from './components/Post.jsx'
import { Header } from './components/Header.jsx'
import { Sidebar } from './components/Sidebar.jsx'

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/LeoMedeirosss.png',
      name: "Wellington Silva",
      role: "CTO"
    },
    content: [
      {type: "paragraph", content: "Lorem Ipsum!" },
      {type : "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {type: "link", content: "Suspendisse lacinia"},
      {type : "paragraph", content:"purus mi, rhoncus consequat quam efficitur vel. In varius nunc massa, at condimentum quam feugiat quis. Curabitur semper Lorem ipsum dolor sit amet. Maecenas posuere imperdiet eros at lobortis."},
      {type : "paragraph", content:"Sed lobortis eros nec lacus cursus auctor. Etiam purus purus, efficitur sit amet."}
    ],
    publishedAt: new Date('2024-10-22 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarURL: 'https://github.com/Roberto.png',
      name: "Roberto Lima",
      role: "DevOps"
    },
    content: [
      {type: "paragraph", content: "Lorem Ipsum!" },
      {type : "paragraph", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
      {type: "link", content: "Suspendisse lacinia"},
      {type : "paragraph", content:"purus mi, rhoncus consequat quam efficitur vel. In varius nunc massa, at condimentum quam feugiat quis. Curabitur semper Lorem ipsum dolor sit amet. Maecenas posuere imperdiet eros at lobortis."},
      {type : "paragraph", content:"Sed lobortis eros nec lacus cursus auctor. Etiam purus purus, efficitur sit amet."}
    ],
    publishedAt: new Date('2024-12-12 10:30:00'),
  },
]

function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author= {post.author}
                content= {post.content}
                publishedAt= {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
export default App