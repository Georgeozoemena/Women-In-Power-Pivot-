import clsx from "clsx";

export default function Button({ children, style, variant = "primary" }) {
  return (
    <button style={style} className={clsx("btn", `btn--${variant}`)}>
      {children}
    </button>
  );
}