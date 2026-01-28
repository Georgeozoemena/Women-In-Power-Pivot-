import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function GetInvolved() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <SectionTitle
          title="Get Involved"
          subtitle="Join us in building leadership and innovation."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {["Donate", "Partner", "Volunteer"].map((item) => (
            <div
              key={item}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-2 text-gray-600">
                Support our mission and extend our impact.
              </p>
              <Button className="mt-4">Learn More</Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}