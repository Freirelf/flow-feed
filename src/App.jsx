import { Header } from "./components/Header"

import './global.css';

import styles from './app.module.css';
import Post from "./components/Posts";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />

      <main>
        <Post />
      </main>
    </div>

    </>
  )
}

export default App
