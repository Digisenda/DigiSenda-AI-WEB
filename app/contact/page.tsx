'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // SIMULATION of n8n webhook call
        console.log('Sending data to n8n:', data);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        setStatus('success');
        // usage: fetch('https://n8n.your-domain.com/webhook/...', { method: 'POST', body: JSON.stringify(data) })
    }

    return (
        <div className="container" style={{ padding: "4rem 2rem", maxWidth: "600px" }}>
            <header style={{ marginBottom: "3rem", textAlign: "center" }}>
                <h1 className="metallic-text" style={{ fontSize: "3rem", marginBottom: "1rem" }}>Contact Us</h1>
                <p style={{ color: "var(--text-secondary)" }}>
                    Start the conversation. We represent the central hub.
                </p>
            </header>

            <form onSubmit={handleSubmit} className={`glass-panel ${styles.form}`}>
                <div className={styles.group}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required className={styles.input} />
                </div>

                <div className={styles.group}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required className={styles.input} />
                </div>

                <div className={styles.group}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} required className={styles.input} style={{ resize: 'vertical' }}></textarea>
                </div>

                <button type="submit" disabled={status === 'submitting' || status === 'success'} className={styles.button}>
                    {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent Successfully' : 'Send Message'}
                </button>
            </form>
        </div>
    );
}
