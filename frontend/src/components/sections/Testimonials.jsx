import { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import "../../styles/testimonials.css";

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const folders = [
    {
      tab: "Success Stories",
      testimonials: [
        {
          name: "Amara Johnson",
          role: "Tech Entrepreneur, Lagos",
          photo: "./testimonial1.jpg",
          quote: "Women in Power didn't just teach me to code—it taught me to dream bigger. Three years ago, I was a high school teacher in Lagos. Today, I run a fintech startup serving 50,000 women across Africa. This program showed me that my voice matters and my ideas can change lives.",
          achievement: "Founded FinHer Tech • 50K+ Users"
        },
        {
          name: "Lisa Rodriguez",
          role: "Software Engineer, Silicon Valley",
          photo: "./testimonial2.jpg",
          quote: "From community college to leading engineering teams at a Fortune 500 company—this journey seemed impossible until Women in Power showed me the roadmap. The technical skills were just the beginning; they taught me to negotiate, to lead, and to never shrink myself.",
          achievement: "Engineering Lead • 3x Promoted"
        }
      ]
    },
    {
      tab: "Mentor Reflections",
      testimonials: [
        {
          name: "Prof. Chidinma Okafor",
          role: "University Dean & Mentor",
          photo: "./testimonial5.jpg",
          quote: "As a mentor with Women in Power, I've witnessed transformation firsthand. These young women don't just learn—they ignite. They challenge assumptions, ask hard questions, and push boundaries. Investing my time here is the most rewarding decision I've made.",
          achievement: "Mentored 40+ Leaders"
        },
        {
          name: "Janet Kim",
          role: "Fortune 500 Executive",
          photo: "./testimonial6.jpg",
          quote: "Mentoring through this program reminds me why representation matters. Watching these brilliant women step into their power, negotiate their worth, and claim leadership roles—it's the legacy work that truly counts.",
          achievement: "15 Years of Mentorship"
        }
      ]
    },
  ];

  const currentFolder = folders[activeTab];

  return (
    <section className="testimonials">
      <Container>
        <SectionTitle
          title="Voices from the Field"
          subtitle="Real women. Real impact. Real change."
          className="testimonials__title"
        />

        <div className="testimonials__folder-container">
          {/* Folder Tabs */}
          <div className="testimonials__tabs">
            {folders.map((folder, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setIsOpen(true);
                }}
                className={`testimonials__tab ${activeTab === index ? 'testimonials__tab--active' : ''}`}
                style={{
                  zIndex: activeTab === index ? 10 : folders.length - index
                }}
              >
                <span className="testimonials__tab-label">{folder.tab}</span>
              </button>
            ))}
          </div>

          {/* Folder Body */}
          <div 
            className={`testimonials__folder ${isOpen ? 'testimonials__folder--open' : ''}`}
          >
            <div className="testimonials__folder-inner">
              {/* Paper Lines Background */}
              <div className="testimonials__lined-paper"></div>

              {/* Testimonial Cards */}
              <div className="testimonials__cards">
                {currentFolder.testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="testimonials__card"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="testimonials__card-clip"></div>
                    <div className="testimonials__card-content">
                      <div className="testimonials__header">
                        {/* <div className="testimonials__photo-wrapper">
                          <img
                            src={testimonial.photo}
                            alt={testimonial.name}
                            className="testimonials__photo"
                          />
                        </div> */}
                        <div className="testimonials__meta">
                          <h4 className="testimonials__name">{testimonial.name}</h4>
                          <p className="testimonials__role">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <blockquote className="testimonials__quote">
                        "{testimonial.quote}"
                      </blockquote>
                      
                      <div className="testimonials__achievement">
                        <svg className="testimonials__stamp" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{testimonial.achievement}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}