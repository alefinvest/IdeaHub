import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header className={styles.header} />
            <h1 className={styles.title}>Welcome to CryptoBankLink</h1>
            <div className={styles.dashboard}>
                <Dashboard />
            </div>
            <Footer className={styles.footer} />
        </div>
    );
}
