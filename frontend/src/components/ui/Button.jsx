import clsx from "clsx";

export default function Button({ children, variant = "primary", className }) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition";

  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "border border-black text-black hover:bg-black hover:text-white",
  };

  return (
    <button className={clsx(base, variants[variant], className)}>
      {children}
    </button>
  );
}