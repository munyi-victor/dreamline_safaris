interface CustomButtonProps {
  title: string;
  className?: string;
  theme?: "default" | "primary" | "secondary";
  handleClick?: () => void;
}

const CustomButton = ({
  title,
  className,
  theme = "default",
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`text-sm md:text-md px-3 py-2 cursor-pointer rounded-lg shadow-sm ${className} ${
        theme === "default"
          ? "bg-black  text-white"
          : theme === "primary"
          ? "bg-blue-500  text-white"
          : "border border-gray-300 text-gray-800"
      }`}
    >
      {title}
    </button>
  );
};

export default CustomButton;
