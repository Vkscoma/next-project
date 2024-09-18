import { FC, ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={`btn bg-third hover:bg-indigo-600 text-dark border-none rounded-lg ${className} text-light`}
    >
      {children}
    </button>
  );
};

export default Button;
