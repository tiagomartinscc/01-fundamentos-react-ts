import "./global.css"
import styles from "./App.module.css"

import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      name: "Tiago Martins",
      avatarUrl: "https://github.com/tiagomartinscc.png",
      role: "Software Engineer"
    },
    content: [
      {type: 'paragrapher', content: 'Fala galeraa 👋'},
      {type: 'paragrapher', content: 'Acabei de subir mais um projeto no meu portiólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-08-14 02:10:00') 
  },
  {
    id: 2,
    author: {
      name: "Mayke Brito",
      avatarUrl: "https://github.com/maykbrito.png",
      role: "Educator"
    },
    content: [
      {type: 'paragrapher', content: 'Fala galeraa 👋'},
      {type: 'paragrapher', content: 'Acabei de subir mais um projeto no meu portiólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-08-13 01:22:10') 
  },
]

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
