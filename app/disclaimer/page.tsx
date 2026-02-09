import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Disclaimer | DigiSenda AI",
    description: "Important disclaimers and limitations for DigiSenda AI services.",
};

export default function DisclaimerPage() {
    return (
        <div className="container" style={{ padding: "4rem 2rem", maxWidth: "900px" }}>
            <h1 className="metallic-text" style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Disclaimer</h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "0.9rem" }}>
                <strong>Last Updated:</strong> February 7, 2026
            </p>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>General Disclaimer</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    The information provided by DigiSenda AI on our website and through our services is for general informational purposes only. All information is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>Service Hub and Orchestration Role</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    DigiSenda AI acts as a central validation and orchestration hub for professional services. While we carefully validate and coordinate our service offerings, we are not directly liable for third-party operational failures, delays, or errors of child services, partner organizations, or external service providers.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Each service provided through or coordinated by DigiSenda AI operates under its own terms and conditions. Users should review service-specific terms before engaging with any particular service.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>Professional Services Disclaimer</h2>
                
                <h3 style={{ color: "var(--primary-metal)", fontSize: "1.2rem", marginBottom: "0.75rem", marginTop: "1.5rem" }}>Tax Preparation Services</h3>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Tax preparation services provided by or through DigiSenda AI do not constitute legal or financial advice. Tax returns are prepared based on information provided by clients. We recommend consulting with licensed tax attorneys or CPAs for complex tax situations.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We make reasonable efforts to ensure accuracy, but we are not responsible for errors resulting from incomplete or inaccurate information provided by clients. All tax filing decisions remain the responsibility of the taxpayer.
                </p>

                <h3 style={{ color: "var(--primary-metal)", fontSize: "1.2rem", marginBottom: "0.75rem", marginTop: "1.5rem" }}>LLC Formation and Legal Services</h3>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    LLC formation and business structuring services do not constitute legal advice. We assist with the administrative process of entity formation but do not provide legal counsel. Clients should consult with licensed attorneys for legal advice specific to their business situation.
                </p>

                <h3 style={{ color: "var(--primary-metal)", fontSize: "1.2rem", marginBottom: "0.75rem", marginTop: "1.5rem" }}>Marketing and Consultation Services</h3>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Marketing strategies, digital marketing campaigns, and business consultation services are provided based on industry best practices and our professional experience. However, we cannot guarantee specific results, outcomes, or return on investment.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Past performance or case studies do not guarantee future results. Market conditions, competitive factors, and client implementation all affect outcomes.
                </p>

                <h3 style={{ color: "var(--primary-metal)", fontSize: "1.2rem", marginBottom: "0.75rem", marginTop: "1.5rem" }}>SynapLeads Platform</h3>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    SynapLeads is provided as a software platform for lead management, qualification, and transfer. While we strive for reliable service, we do not guarantee 100% uptime or error-free operation. Lead quality and conversion rates depend on numerous factors outside our control, including client implementation, market conditions, and sales processes.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>No Warranties</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li>Warranties of merchantability or fitness for a particular purpose</li>
                    <li>Warranties regarding accuracy, reliability, or completeness of information</li>
                    <li>Warranties of uninterrupted, timely, secure, or error-free service</li>
                    <li>Warranties that defects will be corrected</li>
                </ul>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>External Links and Third-Party Content</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    Our website may contain links to third-party websites or services that are not owned or controlled by DigiSenda AI. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
                </p>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We strongly advise you to review the terms and privacy policies of any third-party sites or services you visit or use.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>Limitation of Liability</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    To the maximum extent permitted by applicable law, DigiSenda AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8" }}>
                    <li>Your use or inability to use our services</li>
                    <li>Any unauthorized access to or use of our servers or personal information</li>
                    <li>Any interruption or cessation of services</li>
                    <li>Any errors or omissions in content</li>
                    <li>Any reliance placed on information provided through our services</li>
                    <li>Actions or inactions of third-party service providers</li>
                </ul>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>Changes to Disclaimer</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    We reserve the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the modified disclaimer.
                </p>
            </section>

            <section style={{ marginBottom: "2.5rem" }}>
                <h2 style={{ color: "var(--primary-metal)", fontSize: "1.5rem", marginBottom: "1rem" }}>Contact Information</h2>
                <p style={{ color: "var(--text-primary)", marginBottom: "1rem", lineHeight: "1.6" }}>
                    If you have questions about this disclaimer, please contact us:
                </p>
                <ul style={{ color: "var(--text-primary)", marginLeft: "2rem", marginBottom: "1rem", lineHeight: "1.8", listStyle: "none" }}>
                    <li><strong>Email:</strong> admin@digisendaai.com</li>
                    <li><strong>Support:</strong> soporte@digisendaai.com</li>
                    <li><strong>Phone:</strong> +1 (940) 548-7913</li>
                    <li><strong>Website:</strong> https://digisendaai.com</li>
                </ul>
            </section>

            <div style={{ padding: "1.5rem", backgroundColor: "var(--glass-bg)", borderRadius: "8px", marginTop: "3rem", border: "1px solid var(--primary-metal)" }}>
                <p style={{ color: "var(--primary-metal)", fontSize: "1rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                    Important Notice
                </p>
                <p style={{ color: "var(--text-primary)", fontSize: "0.9rem", lineHeight: "1.6", margin: 0 }}>
                    This disclaimer applies to all services, content, and information provided by or through DigiSenda AI. By using our services, you acknowledge and accept the terms of this disclaimer.
                </p>
            </div>
        </div>
    );
}
