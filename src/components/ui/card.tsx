import React from "react";

export function Card({ className="", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-2xl border border-border bg-background/80 backdrop-blur ${className}`} {...props} />;
}

export function CardContent({ className="", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-5 ${className}`} {...props} />;
}
