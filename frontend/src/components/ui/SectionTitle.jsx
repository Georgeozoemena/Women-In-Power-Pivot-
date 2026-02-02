import '../../index.css'

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title-wrapper">
      <h2 className="section-title">
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