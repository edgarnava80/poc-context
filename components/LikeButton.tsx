import { useApp } from '../store/store';
import styles from "../styles/Home.module.css";

const LikeButton = () => {
    const { addLike } = useApp();
    return (
        <p onClick={addLike} className={styles.card}>
            Click here to like
        </p>
    )
}

export default LikeButton;