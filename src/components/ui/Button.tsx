import { ReactNode } from "react";

interface ButtonProps {
  title?: string;
  type?: "default" | "outline" | "cancel" | "danger" | "ghost";
  size?: "small" | "large";
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
}

export default function Button({
  title = "",
  type = "default",
  size = "small",
  onClick,
  className = "",
  children = null,
}: ButtonProps) {
  const baseStyle =
    "text-center rounded-md text-sm capitalize flex items-center justify-center gap-1";
  let typeStyle = "";

  let sizeStyle = "";

  switch (size) {
    case "small":
      sizeStyle = "font-semibold";
      break;
    case "large":
      sizeStyle = "font-bold";
      break;
    default:
      sizeStyle = "font-semibold";
      break;
  }

  switch (type) {
    case "outline":
      typeStyle = "min-w-36 px-8 py-2 text-primary ring-1 ring-primary";
      break;
    case "cancel":
      typeStyle = "min-w-36 px-8 py-2 text-gray-500 ring-1 ring-gray-300";
      break;
    case "danger":
      typeStyle = "min-w-36 px-8 py-2 text-red-500 ring-1 ring-red-500";
      break;
    case "ghost":
      typeStyle = "w-fit text-primary";
      break;
    default:
      typeStyle = "min-w-36 bg-primary px-8 py-2 text-white";
  }

  return (
    <>
      <button
        onClick={onClick}
        className={`${baseStyle} ${sizeStyle} ${typeStyle} ${className}`}
      >
        {children}
        <p>{title}</p>
      </button>
    </>
  );
}
