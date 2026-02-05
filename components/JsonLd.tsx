export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DigiSenda AI",
        "url": "https://digisenda.ai",
        "logo": "https://digisenda.ai/logo.png",
        "sameAs": [
            "https://twitter.com/digisenda",
            "https://linkedin.com/company/digisenda"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-555-5555",
            "contactType": "Customer Service"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
