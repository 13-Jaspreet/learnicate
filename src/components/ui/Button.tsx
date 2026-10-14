import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-charcoal hover:bg-gold-light active:bg-gold-muted border border-gold",
  secondary:
    "bg-transparent text-ivory border border-zinc-600 hover:border-gold hover:text-gold",
  outline:
    "bg-transparent text-gold border border-gold hover:bg-gold/10 active:bg-gold/20",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
