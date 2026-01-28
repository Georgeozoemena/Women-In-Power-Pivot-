import Container from "../ui/Container";

const stats = [
  { label: "States Reached", value: "25+" },
  { label: "Annual Conferences", value: "10+" },
  { label: "Participants", value: "5,000+" },
];

export default function Stats() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((item) => (
            <div key={item.label}>
              <h3 className="text-4xl font-bold">{item.value}</h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}