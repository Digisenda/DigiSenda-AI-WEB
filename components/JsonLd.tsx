export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "DigiSenda AI",
        "url": "https://digisendaai.com",
        "logo": "https://digisendaai.com/logo.png",
        "sameAs": [
            "https://x.com/DIGISENDAAI",
            "https://www.linkedin.com/in/digisenda-ai-34b3053ab/",
            "https://github.com/Digisenda",
            "https://www.youtube.com/@DigiSenda",
            "https://www.instagram.com/digisendaai/"
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-940-548-7913",
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
