import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function GetInvolved() {
  const items = [
    {
      title: "Donate",
      headline: "Invest in Her Future",
      description: "Your contribution directly funds scholarships, mentorship programs, and resources that transform aspiring leaders into changemakers. Every dollar creates ripple effects of empowerment across communities.",
      image: "./Photo4.jpg",
      ctaBtn: "Make an Impact"
    },
    {
      title: "Partner",
      headline: "Collaborate for Change",
      description: "Join corporations, NGOs, and educational institutions already partnering with us. Together, we expand opportunities, share resources, and create sustainable pathways for women's leadership.",
      image: "./Photo1.jpg",
      ctaBtn: "Become a Partner"
    },
    {
      title: "Volunteer",
      headline: "Share Your Expertise",
      description: "Mentor the next generation, facilitate workshops, or contribute your professional skills. Our volunteers are the heartbeat of our community—lending experience, wisdom, and encouragement.",
      ctaBtn: "Get Started",
      image: "./Photo2.jpg"
    }
  ];

  return (
    <section className="get-involved">
      <Container>
        <SectionTitle 
          className="get-involved__title"
          title="Get Involved"
          subtitle="Join us in building leadership and innovation."
        />

        <div className="get-involved__cards">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`get-involved__card ${index % 2 === 1 ? 'get-involved__card--reverse' : ''}`}
            >
              <div className="get-involved__image-wrapper">
                <img 
                  src={item.image} 
                  className="get-involved__image" 
                  alt={`${item.title} with Pivot Initiative`} 
                />
              </div>
              <div className="get-involved__content-wrapper">
                <div className="get-involved__content">
                  <h3 className="get-involved__card-title">{item.title}</h3>
                  <p className="get-involved__card-description">
                    {item.headline && <strong>{item.headline}<br /></strong>}
                    {item.description}
                  </p>
                  <Button className="get-involved__button">Learn More</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}