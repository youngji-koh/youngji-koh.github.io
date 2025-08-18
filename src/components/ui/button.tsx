import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "icon";
  className?: string;
};

export function Button({ variant="default", size="default", className="", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-2xl text-sm font-medium transition-shadow";
  const pad = size === "icon" ? "h-10 w-10" : "px-4 py-2";
  const style =
    variant === "outline"
      ? "border border-border bg-transparent hover:shadow"
      : variant === "ghost"
      ? "bg-transparent hover:bg-muted/50"
      : "bg-foreground text-background hover:shadow";
  return <button className={`${base} ${pad} ${style} ${className}`} {...props} />;
}
