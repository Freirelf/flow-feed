import styles from './styles.module.css'

export default function Avatar({ hasBorder = true, src, alt}) {

  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} alt={alt}/>
  )
}