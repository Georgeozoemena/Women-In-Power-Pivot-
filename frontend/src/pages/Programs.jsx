import { GraduationCap, Laptop, Users, ShieldCheck } from "lucide-react";
import "../styles/programs.css";

export default function Programs() {
  const programs = [
    {
      icon: GraduationCap,
      title: "The Pivot Leadership Academy",
      duration: "6 Months",
      type: "EXECUTIVE TRACK",
      desc: "An intensive leadership track tailored for women in middle and senior management who are ready to scale their impact.",
      features: ["Strategic Governance", "Capital Management", "Diplomatic Leadership"]
    },
    {
      icon: Laptop,
      title: "Digital Literacy Initiative",
      duration: "3 Months",
      type: "TECHNICAL TRACK",
      desc: "Bridging the digital divide by equipping women with the technical skills required for the modern global economy.",
      features: ["Digital Strategy", "Emerging Tech", "Data Privacy"]
    },
    {
      icon: Users,
      title: "Mentorship Circle",
      duration: "Ongoing",
      type: "COMMUNITY TRACK",
      desc: "Connecting emerging leaders with established veterans to foster a lifelong exchange of knowledge and resources.",
      features: ["Peer Learning", "Direct Advocacy", "Asset Sharing"]
    },
    {
      icon: ShieldCheck,
      title: "Institutional Change Program",
      duration: "12 Months",
      type: "STRUCTURAL TRACK",
      desc: "Working directly with organizations to restructure internal systems for sustainable gender equity and inclusion.",
      features: ["Policy Redesign", "Equity Audits", "Cultural Shift"]
    }
  ];

  return (
    <div className="programs-page">
      {/* Background Blobs */}
      <div className="mesh-blob mesh-blob-1" style={{ top: '10%', right: '-5%' }} />
      <div className="mesh-blob mesh-blob-2" style={{ bottom: '20%', left: '-10%' }} />

      <div className="container section-padding">
        <header className="programs-hero">
          <span className="section-label">GLOBAL TRACKS</span>
          <h1 className="programs-hero__title">
            Scaling <br />Human <br /><span className="highlight-apex">Potential.</span>
          </h1>
          <p className="programs-hero__subtitle">
            Our programs are designed as high-impact infrastructure to accelerate women's leadership across all sectors.
          </p>
        </header>

        <div className="programs-grid">
          {programs.map((program, idx) => {
            const Icon = program.icon;
            return (
              <div key={idx} className="program-card">
                <div className="program-card__header">
                  <div className="program-card__icon"><Icon size={24} /></div>
                  <span className="program-card__type">{program.type}</span>
                </div>

                <h3 className="program-card__title">{program.title}</h3>
                <span className="program-card__duration">{program.duration}</span>
                <p className="program-card__desc">{program.desc}</p>

                <div className="program-card__features">
                  {program.features.map((f, i) => (
                    <span key={i} className="feature-chip">{f}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <section className="programs-cta section-padding">
          <div className="cta-box">
            <h2 className="cta-box__title">Ready to scale your impact?</h2>
            <button className="btn-contact-submit" style={{ width: 'auto', padding: '16px 48px' }}>
              Join the Academy
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}