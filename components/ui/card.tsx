import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="border rounded-lg shadow">{children}</div>;
}