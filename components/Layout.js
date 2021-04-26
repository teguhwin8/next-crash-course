import styles from '../styles/Layout.module.css'
import Head from 'next/head'

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Crash Course 2021</title>
      </Head>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout
