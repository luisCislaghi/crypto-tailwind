import cn from "@/util/cn";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { IconType, IconBase } from "react-icons";
import { TbSearch } from "react-icons/tb";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  icon: Icon,
  className,
  type = "text",
  ...props
}) => {
  return (
    <div className="flex flex-nowrap items-center ">
      {Icon && (
        <div className="absolute px-4 text-gray-500">
          <Icon size={18} />
        </div>
      )}
      <input
        {...props}
        type={type}
        className={cn("rounded-lg p-3", { "pl-12": !!Icon }, className)}
      />
    </div>
  );
};

export default Input;
