import React from "react";

export function Button({ children, variant, onClick, className }: { children: React.ReactNode; variant?: string; onClick?: () => void; className?: string }) {
  const baseStyle = "px-4 py-2 rounded font-medium";
  const variantStyle = variant === "outline" ? "border border-gray-300" : "bg-blue-500 text-white";
  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle} ${className}`}>
      {children}
    </button>
  );
}