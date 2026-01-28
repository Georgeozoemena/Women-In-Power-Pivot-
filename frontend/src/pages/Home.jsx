import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-24">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-tight">
            Empowering Ideas That Shape the Future
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            The Pivot is committed to leadership, innovation, and impact.
          </p>

          <div className="mt-8 flex gap-4">
            <Button>Get Involved</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}