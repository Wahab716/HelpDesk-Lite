import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
};

function Button({
  children,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const baseClasses = "rounded-lg px-4 py-2 text-sm font-semibold transition";

  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50";

  return (
    <button type={type} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  );
}

export default Button;
