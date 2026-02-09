import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | DigiSenda AI",
    description: "Privacy Policy and data protection practices of DigiSenda AI.",
};

export default function PrivacyPage() {
    return (
        <div className="container" style={{ padding: "4rem 2rem", maxWidth: "900px" }}>
            <h1 className="metallic-text" style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Privacy Policy</h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "0.9rem" }}>
                <strong>Last Updated:</strong> February 7, 2026
            </p>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>1. Introduction</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    DigiSenda AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website digisendaai.com or use our services.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Your data sovereignty is paramount. We do not sell your personal information to third parties.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>2. Information We Collect</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We may collect the following types of information:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and other information you provide when contacting us or using our services.</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
                    <li><strong>Communication Data:</strong> Records of communications if you contact us, including messages sent through contact forms.</li>
                    <li><strong>Service-Specific Data:</strong> Information collected when using specific services (e.g., tax preparation, LLC formation, lead generation platforms).</li>
                </ul>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>3. How We Use Your Information</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We use the information we collect to:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li>Provide, operate, and maintain our services</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send service-related communications, including confirmations and updates</li>
                    <li>Improve and personalize your experience on our website</li>
                    <li>Analyze usage patterns to enhance our services</li>
                    <li>Comply with legal obligations and enforce our terms</li>
                    <li>Prevent fraud and ensure security</li>
                </ul>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>4. SMS and Phone Communication</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    If you provide your phone number, you may receive SMS messages or phone calls related to:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li>Service notifications and updates</li>
                    <li>Appointment reminders</li>
                    <li>Lead qualification and transfer (for SynapLeads service users)</li>
                    <li>Customer support communications</li>
                </ul>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    You can opt out of non-essential communications at any time by replying STOP to SMS messages or contacting us at admin@digisendaai.com. Message and data rates may apply.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>5. Cookies and Tracking Technologies</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We use cookies and similar tracking technologies to:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li>Maintain session information</li>
                    <li>Analyze website traffic and user behavior (via Google Analytics)</li>
                    <li>Improve website functionality and user experience</li>
                </ul>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    You can control cookies through your browser settings. Disabling cookies may affect website functionality.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>6. Information Sharing and Disclosure</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our services (e.g., hosting, analytics, communication platforms).</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information.</li>
                </ul>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>7. Data Security</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We implement reasonable administrative, technical, and physical security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>8. Data Retention</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>9. Your Rights</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Depending on your location, you may have the following rights:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li><strong>Access:</strong> Request access to the personal information we hold about you.</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations.</li>
                    <li><strong>Objection:</strong> Object to the processing of your personal information.</li>
                    <li><strong>Portability:</strong> Request a copy of your information in a portable format.</li>
                </ul>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    To exercise these rights, contact us at admin@digisendaai.com or soporte@digisendaai.com.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>10. Children's Privacy</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>11. Third-Party Links</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>12. Changes to This Privacy Policy</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>13. Contact Us</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8", listStyle: "none" }}>
                    <li><strong>Email:</strong> admin@digisendaai.com</li>
                    <li><strong>Support:</strong> soporte@digisendaai.com</li>
                    <li><strong>Phone:</strong> +1 (940) 548-7913</li>
                    <li><strong>Website:</strong> https://digisendaai.com</li>
                </ul>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>14. Jurisdiction and Governing Law</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    This Privacy Policy is governed by the laws of the State of Texas, United States. DigiSenda AI operates primarily within the United States and processes data accordingly.
                </p>
            </section>
        </div>
    );
}
