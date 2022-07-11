import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useApp } from '../store/store';
//import LikeButton from '../components/LikeButton';
import Foot from '../components/Foot';
import LikeButton from '../components/LikeButton';

export { getStaticProps } from '../store/store';

const Home = () => {
  const { likes } = useApp();
  return (
    <div className={styles.container}>
      <Head>
        <title>Sunrun POC - Valtio</title>
        <meta name="description" content="Nextjs Sunrun POC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.subtitle}>
          Likes: <span className={styles.likes}>{likes}</span>
        </h1>
      </header>
      <main className={styles.main}>
        <h2 className={styles.title}>
          Nextjs <a href="https://sunrun.com">Sunrun</a> POC with Valtio
        </h2>
        <LikeButton />
        <Foot />
      </main>
    </div>
  )
}

export default Home
