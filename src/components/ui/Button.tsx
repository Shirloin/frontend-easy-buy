interface ButtonProps {
  title: string;
  type?: "default" | "outline" | "cancel" | "danger";
  className?: string;
  onClick: () => void;
}

export default function Button({
  title = "",
  type = "default",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyle =
    "min-w-36 text-center rounded-md px-8 py-2 text-sm font-semibold capitalize";
  let typeStyle = "";

  switch (type) {
    case "outline":
      typeStyle = "text-primary ring-1 ring-primary";
      break;
    case "cancel":
      typeStyle = "text-gray-500 ring-1 ring-gray-300";
      break;
    case "danger":
      typeStyle = "text-red-500 ring-1 ring-red-500";
      break;
    default:
      typeStyle = "bg-primary text-white";
  }

  return (
    <>
      <button
        onClick={onClick}
        className={`${baseStyle} ${typeStyle} ${className}`}
      >
        {title}
      </button>
    </>
  );
}
