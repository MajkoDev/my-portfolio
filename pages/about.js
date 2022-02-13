import Navbar from '../components/Navbar'

import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.main}>
            <Navbar />
            <h1>About Page</h1>
        </div>
    );
}