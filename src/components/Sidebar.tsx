import styles from "./Sidebar.module.css"
import imgBackground from "../assets/background.png"
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src={imgBackground} 
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/tiagomartinscc.png" />
        <strong>Tiago Martins</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}