import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          src="/static/images/Cover.png"
          alt="Cover"
          width={1154}
          height={800}
        />
        <Image
          src="/static/images/Page-1.png"
          alt="Page-1"
          width={638}
          height={938}
        />
        <Image
          src="/static/images/Page-2.png"
          alt="Page-2"
          width={638}
          height={938}
        />
      </div>
    </main>
  )
}
