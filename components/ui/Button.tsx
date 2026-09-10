"use client";

import React from "react";
import { soundFx } from "@/lib/sound";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "cyber";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  glow?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  glow = true,
  className,
  onClick,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    soundFx.playClick();
    if (onClick) onClick(e);
  };

  const handleMouseEnter = () => {
    soundFx.playHover();
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl select-none relative overflow-hidden group active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 border border-cyan-300/30",
    secondary:
      "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/25 border border-purple-400/30",
    outline:
      "bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 border border-white/15 hover:border-cyan-400/50 hover:text-cyan-300 backdrop-blur-md",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
    cyber:
      "bg-emerald-500/10 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/20 hover:border-emerald-400 shadow-lg shadow-emerald-500/20",
  };

  const content = (
    <>
      {/* Subtle Shimmer Ray */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
      
      {icon && iconPosition === "left" && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === "right" && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        onMouseEnter={handleMouseEnter}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
