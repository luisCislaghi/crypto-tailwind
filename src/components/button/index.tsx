import { type } from "os";
import React from "react";
import cn from "@/util/cn";
import { IconType } from "react-icons";

export type ButtonProps = {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  block?: boolean;
  type?: "primary" | "danger" | "link";
  icon?: IconType;
};

const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  disabled = false,
  block = false,
  type = "primary",
  size = "md",
}) => {
  const wrappperClass = cn("rounded-lg cursor-pointer ", {
    "bg-stone-900 text-white": type === "primary",
    "bg-red-600 text-white": type === "danger",
    "font-semibold": type === "link",
    "bg-stone-400 text-stone-700": disabled,
    "py-3 px-6 text-md": size === "sm",
    "py-4 px-8 text-lg": size === "md",
    "py-5 px-10 text-xl": size === "lg",
    "w-full": block,
  });

  return (
    <div className={wrappperClass}>
      <div className="no-wrap flex items-center justify-center gap-4">
        {Icon && <Icon className="text-md" />}
        {children}
      </div>
    </div>
  );
};

export default Button;
