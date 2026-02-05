import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    {/* We will replace this with an Image once logo is available */}
                    <span className="metallic-text">DigiSenda AI</span>
                </Link>
                <div className={styles.links}>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/blog">Blog</Link>
                </div>
                <Link href="/contact" className={styles.cta}>
                    Contact
                </Link>
            </div>
        </nav>
    );
}
