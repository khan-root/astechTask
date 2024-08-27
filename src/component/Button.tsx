import { ButtonProps } from "../interfaces/componentInterface/componentInterfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  bgColor = "bg-blue-500",
  color = "text-white",
  borderColor = "border-none",
}) => {
  return (
    <button
      className={`px-4 py-2 rounded ${bgColor} ${color} border ${borderColor} rounded-[30px] hover:opacity-75 transition-opacity duration-300`}
    >
      {title}
    </button>
  );
};

export default Button;
