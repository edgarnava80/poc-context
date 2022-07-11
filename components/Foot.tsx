import Link from "next/link";
import styles from "../styles/Home.module.css";

const Foot = () => {
    return (
        <div className={styles.foot}>
            <span className={styles.card}>
                <Link href="/create">Add new Car</Link>
            </span>
            <span className={styles.card}>
                <Link href="/"> Home</Link>
            </span>
            <span className={styles.card}>
                <Link href="/list"> View existing Cars</Link>
            </span>
        </div>
    )
}

export default Foot;