import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Service | DigiSenda AI",
    description: "Terms of Service and conditions for using DigiSenda AI services.",
};

export default function TermsPage() {
    return (
        <div className="container" style={{ padding: "4rem 2rem", maxWidth: "900px" }}>
            <h1 className="metallic-text" style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Terms of Service</h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "0.9rem" }}>
                <strong>Last Updated:</strong> February 7, 2026
            </p>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>1. Acceptance of Terms</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    By accessing or using DigiSenda AI's website (digisendaai.com) and services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    These Terms constitute a legally binding agreement between you and DigiSenda AI. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>2. Description of Services</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    DigiSenda AI serves as a central validation and orchestration hub for professional services, including but not limited to:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li>SynapLeads - Lead capture, qualification, and transfer platform</li>
                    <li>LLC formation and business structuring services</li>
                    <li>Web development and landing page design</li>
                    <li>Tax preparation services for individuals and small businesses</li>
                    <li>Digital marketing and strategic consultation</li>
                </ul>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    The specific terms and conditions for each service may be provided separately and are incorporated by reference into these Terms.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>3. User Eligibility</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    You must be at least 18 years old to use our services. By using our services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>4. User Accounts and Registration</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Some services may require you to create an account. You agree to:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Accept responsibility for all activities that occur under your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>5. Acceptable Use</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    You agree not to:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li>Use our services for any unlawful purpose or in violation of any applicable laws</li>
                    <li>Attempt to gain unauthorized access to our systems or networks</li>
                    <li>Interfere with or disrupt the integrity or performance of our services</li>
                    <li>Transmit any viruses, malware, or other malicious code</li>
                    <li>Harvest or collect information about other users without consent</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation</li>
                    <li>Use our services to send spam or unsolicited communications</li>
                    <li>Reverse engineer, decompile, or disassemble any aspect of our services</li>
                </ul>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>6. Intellectual Property</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    All content, features, and functionality of our services, including but not limited to text, graphics, logos, designs, software, and data compilations, are the exclusive property of DigiSenda AI or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    You are granted a limited, non-exclusive, non-transferable license to access and use our services for their intended purposes. This license does not include any resale or commercial use of our services or content.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>7. Payment and Fees</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Certain services may require payment of fees. You agree to pay all applicable fees as described for each service. All fees are non-refundable unless otherwise stated in writing or required by law.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We reserve the right to change our fees at any time. Notice of fee changes will be provided in advance when applicable.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>8. Communications and Consent</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    By using our services and providing your contact information, you consent to receive communications from us via email, SMS, or phone calls. These communications may include:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li>Service-related notifications and updates</li>
                    <li>Account confirmations and security alerts</li>
                    <li>Customer support responses</li>
                    <li>Informational communications about services you have inquired about</li>
                </ul>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    You may opt out of non-essential communications at any time by following the unsubscribe instructions in emails or by contacting us at admin@digisendaai.com.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>9. Disclaimers and Limitation of Warranties</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We do not warrant that our services will be uninterrupted, error-free, or completely secure. We do not guarantee the accuracy, completeness, or reliability of any content or information provided through our services.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    DigiSenda AI acts as an informational and orchestral platform. We validate and coordinate services but are not directly liable for third-party operational failures of child services or external partners.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>10. Limitation of Liability</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, DIGISENDA AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Our total liability to you for all claims arising from or related to our services shall not exceed the amount you paid us in the twelve (12) months preceding the claim, or $100, whichever is greater.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>11. Indemnification</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    You agree to indemnify, defend, and hold harmless DigiSenda AI and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of or related to:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li>Your use of our services</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any rights of another party</li>
                    <li>Your violation of any applicable laws or regulations</li>
                </ul>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>12. Termination</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We reserve the right to suspend or terminate your access to our services at any time, with or without cause or notice, including for violation of these Terms.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Upon termination, your right to use our services will immediately cease. Provisions of these Terms that by their nature should survive termination shall survive, including intellectual property rights, disclaimers, and limitations of liability.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>13. Dispute Resolution</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Any dispute arising out of or relating to these Terms or our services shall be resolved through good faith negotiation. If the dispute cannot be resolved through negotiation, it shall be submitted to binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    The arbitration shall take place in San Antonio, Texas. Each party shall bear its own costs and expenses.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>14. Governing Law and Jurisdiction</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    You agree to submit to the personal jurisdiction of the courts located in San Antonio, Texas for any actions not subject to arbitration.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>15. Modifications to Terms</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We reserve the right to modify these Terms at any time. We will provide notice of material changes by updating the "Last Updated" date and, when appropriate, by sending notice to the email address associated with your account.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Your continued use of our services after any modification constitutes acceptance of the modified Terms.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>16. Severability</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>17. Entire Agreement</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    These Terms, together with our Privacy Policy and any service-specific terms, constitute the entire agreement between you and DigiSenda AI regarding your use of our services.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>18. Contact Information</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    If you have questions or concerns about these Terms, please contact us:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8", listStyle: "none" }}>
                    <li><strong>Email:</strong> admin@digisendaai.com</li>
                    <li><strong>Support:</strong> soporte@digisendaai.com</li>
                    <li><strong>Phone:</strong> +1 (940) 548-7913</li>
                    <li><strong>Website:</strong> https://digisendaai.com</li>
                </ul>
            </section>

            <div style={{ padding: "1.5rem", backgroundColor: "var(--glass-bg)", borderRadius: "8px", marginTop: "3rem" }}>
                <p style={{ color: "var(--text-primary)", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
                    By using DigiSenda AI services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
            </div>
        </div>
    );
}
