import { Header } from "./components/Header"

import './global.css';

import styles from './app.module.css';
import Post from "./components/Posts";
import Sidebar from "./components/Sidebar";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/Freirelf.png',
      name: 'Lucas Freire',
      role: 'Web developer'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},

        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz para uma clínica.. O nome do projeto é Centro clínica 🚀'},
      
        {type: 'link', content:'👉 freirelf.design/centroclinica'},
    ],
    publishedAt: new Date(Date.UTC(2024,1, 11, 16, 20)),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/manny.png',
      name: 'many lasson',
      role: 'Web design'
    },
    content: [
        {type: 'paragraph', content: 'Fala galeraa 👋'},

        {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. É um projeto que fiz para uma uma loja de games.. O nome do projeto é GameStack 🚀'},
      
        {type: 'link', content:'👉 many.design/gamesbranch'},
      ],
      publishedAt: new Date(Date.UTC(2024,1, 15, 25)),
  }
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
