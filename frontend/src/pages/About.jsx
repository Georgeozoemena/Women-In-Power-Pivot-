import SEO from "../seo/SEO";
import Container from "../components/ui/Container";

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn more about The Pivot and our mission."
      />
      <Container>
        <div className="py-20 max-w-3xl">
          <h1 className="text-4xl font-bold">About The Pivot</h1>
          <p className="mt-4 text-gray-600">
            We exist to inspire and empower leadership across communities.
          </p>
        </div>
      </Container>
    </>
  );
}