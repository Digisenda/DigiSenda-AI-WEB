import Link from 'next/link';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    description: string;
    link?: string;
}

export default function ServiceCard({ title, description, link = '#' }: ServiceCardProps) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <Link href={link} className={styles.link}>
                Learn More →
            </Link>
        </div>
    );
}
