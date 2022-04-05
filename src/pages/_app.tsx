import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'


function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <header>
      <Link href={'/'}>
        <a>
          <h1 className={styles['title']}>
            Treina
            <span className={styles['title-second-word']}>Blog</span>
          </h1>
        </a>
      </Link>
    </header>
    <Component {...pageProps} />
  </>)
}

export default MyApp
