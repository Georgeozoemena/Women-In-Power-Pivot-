import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function GetInvolved() {
  const items = [
    {
      title: "Donate",
      headline: "Give Hope. Build Leaders. Change Lives.",
      description: "Your support, transforms potential into possibility by funding programs that will guide, eqiup, and uplift women on their own journey to leadership. One gift, can shape a lifetime of impact",
      image: "./Donate.jpg",
      ctaBtn: "Make an Impact"
    },
    {
      title: "Partner with Us",
      headline: "Coming together to make a difference",
      description: "Work alongside corporations, NGO's, and educational institutions, committed to expanding access to opportunity. By working together, we unlock opportinities, share resources, and nurture a future where women lead, influence, and also transform communities.",
      image: "./Photo1.jpg",
      ctaBtn: "Become a Partner"
    },
    {
      title: "Volunteer",
      headline: "Be Part of the Journey",
      description: "Lend your expertise through mentorship or skills-based support. Leading impactful workshops and helping shape confident leaders, our volunteers bring encouragement, experience, and the belief that every woman has the power to lead.",
      ctaBtn: "Get Started",
      image: "./Volunteer.jpg"
    }
  ];

  return (
    <section className="get-involved">
      <Container>
        <SectionTitle 
          className="get-involved__title"
          title="Join the Movement"
          subtitle="Join the movement, Uplifting women, growth in impact and success"
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
                  <Button className="get-involved__button">{item.ctaBtn}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}