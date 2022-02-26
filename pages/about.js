import Header from '../components/Header'
import styles from '../styles/Home.module.css'


export default function About() {
    return (
        <div className={styles.main}>
            <Header />
            <h1>About Page</h1>
        </div>
    );
}