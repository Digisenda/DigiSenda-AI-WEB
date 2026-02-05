import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="container" style={{ padding: "4rem 2rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "3rem", fontSize: "2rem" }}>
          Why <span className="metallic-text">DigiSenda AI</span>?
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem"
        }}>
          <FeatureCard
            title="Sovereign Identity"
            desc="One unified brand authority validating all your professional ventures."
          />
          <FeatureCard
            title="Strategic Orchestration"
            desc="Centralized management of diverse services without operational chaos."
          />
          <FeatureCard
            title="Future Ready"
            desc="An architecture built for scalability, ready for advanced integrations."
          />
        </div>
      </section>
    </>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="glass-panel" style={{ padding: "2rem" }}>
      <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem", color: "var(--primary-metal)" }}>{title}</h3>
      <p style={{ color: "var(--text-secondary)" }}>{desc}</p>
    </div>
  );
}
