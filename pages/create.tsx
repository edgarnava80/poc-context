import type { NextPage } from 'next'
import { MouseEvent, useState } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useApp } from '../store/store';
import LikeButton from '../components/LikeButton';
import Foot from '../components/Foot';

export { getStaticProps } from '../store/store';

const Cars: NextPage = () => {
    const { likes, cars, addCar, randomCar } = useApp();
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState(0);

    const handleClick = () => {
        addCar({ make, model, year });
        setMake('');
        setModel('');
        setYear(0);
    }

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
                    Add a new Car
                </h2>
                <LikeButton />
                <form className={styles.form}>
                    <label className={styles.label}>
                        Make:
                        <input value={make} onChange={e => setMake(e.target.value)} className={styles.input} type="text" name="make" />
                    </label>
                    <label className={styles.label}>
                        Model:
                        <input value={model} onChange={e => setModel(e.target.value)} className={styles.input} type="text" name="model" />
                    </label>
                    <label className={styles.label}>
                        Year:
                        <input value={year} onChange={e => setYear(parseInt(e.target.value))} className={styles.input} type="number" name="year" />
                    </label>
                    <p onClick={handleClick} className={styles.button}>Add Car</p>
                    <p onClick={randomCar} className={styles.button}>Add random Car</p>
                </form>

                <div className={styles.grid}>
                    {cars.map((car: { make: string; model: string; year: number; }, idx: any) => (
                        <span key={idx} className={styles.code}>{` ${car.make} - ${car.model} - ${car.year} ${idx < cars.length - 1 ? ' | ' : ''}`}</span>
                    ))}
                </div>
                <Foot />
            </main>
        </div>
    )
}

export default Cars