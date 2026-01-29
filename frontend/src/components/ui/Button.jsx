import clsx from "clsx";

export default function Button({ children, variant = "primary" }) {
  return (
    <button className={clsx("btn", `btn--${variant}`)}>
      {children}
    </button>
  );
}