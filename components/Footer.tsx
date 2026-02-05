import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <span className="metallic-text">DigiSenda AI</span>
                        <p>© {new Date().getFullYear()} All Rights Reserved.</p>
                    </div>
                    <div className={styles.legal}>
                        <a href="/privacy">Privacy Policy</a>
                        <a href="/terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
