import '../../index.css'

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-6xl md:text-6xl font-semibold">
        {title}
      </h2>
      {subtitle && (
        <p>
          {subtitle}
        </p>
      )}
    </div>
  );
}