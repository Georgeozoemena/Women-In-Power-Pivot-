import clsx from "clsx";
import { Link } from "react-router-dom";

export default function Button({ children, style, variant = "primary", className, to }) {
  const classes = clsx("btn", `btn--${variant}`, className);

  if (to) {
    return (
      <Link to={to} style={style} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button style={style} className={classes}>
      {children}
    </button>
  );
}