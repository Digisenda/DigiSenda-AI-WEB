import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.blob}></div>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        The Central Hub for <span className="metallic-text">Professional Excellence</span>
                    </h1>
                    <p className={styles.subtitle}>
                        DigiSenda AI centralizes, validates, and orchestrates your professional ecosystem.
                        One brand, infinite possibilities.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/services" className={styles.primaryBtn}>
                            Explore Services
                        </Link>
                        <Link href="/about" className={styles.secondaryBtn}>
                            Our Vision
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
