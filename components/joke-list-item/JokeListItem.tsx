import { Elevation } from '@rmwc/elevation'
import styles from './JokeListItem.module.css'

export default function JokeListItem({ item }) {
  return (
    <a href={item.url} target="_blank" className={styles.itemLink}>
      <Elevation z={1} wrap className={styles.item}>
        <div>{item.value}</div>
      </Elevation>
    </a>
  )
}
