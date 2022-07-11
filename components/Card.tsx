import styles from '../styles/Home.module.css'

interface ICard {
    make: string;
    model: string;
    year: number;
}

const Card = ({ make = 'a make', model = 'a model', year = 1234 }: ICard) => {
    return (
        <div className={styles.card}>
            <h2>{`Make: ${make}`}</h2>
            <p>{`Model: ${model}`}</p>
            <p>{`Year: ${year}`}</p>
        </div>
    )
}

export default Card;
