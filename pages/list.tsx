import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useApp } from '../store/store';
import Card from '../components/Card';
import LikeButton from '../components/LikeButton';
import Foot from '../components/Foot';

export { getStaticProps } from '../store/store';

const List: NextPage = () => {
    const { likes, cars } = useApp();
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
                    Cars in state:
                </h2>
                <LikeButton />
                <div className={styles.grid}>
                    {cars.map((car: { make: string; model: string; year: number; }, idx: any) => (
                        <Card key={idx} make={car.make} model={car.model} year={car.year} />
                    ))}
                </div>
                <Foot />
            </main>
        </div>
    )
}

export default List
