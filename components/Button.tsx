"use client";

import type { ReactNode } from "react";
import { useRegistration } from "./registration/RegistrationProvider";

const base =
  "inline-flex items-center justify-center rounded-full font-bold transition-[background-color,transform] duration-500 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const sizes = {
  sm: "px-6 py-3 text-[15px]",
  md: "px-8 py-4 text-base",
  lg: "px-10 py-5 text-[17px]",
} as const;

const variants = {
  orange: "bg-orange text-white shadow-[0_16px_36px_-14px_rgba(244,41,2,0.6)] hover:bg-orange-hover",
  white: "bg-white text-ink hover:bg-mist",
  ink: "bg-ink text-white hover:bg-ink/85",
} as const;

type Props = {
  children: ReactNode;
  className?: string;
  telimSlug?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

// Qeydiyyat pəncərəsini açan əsas düymə.
export function RegisterButton({ children, className = "", telimSlug, variant = "orange", size = "md" }: Props) {
  const { open } = useRegistration();
  return (
    <button type="button" onClick={() => open(telimSlug)} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
