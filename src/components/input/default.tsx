import clsx from "clsx";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { IconType, IconBase } from "react-icons";
import { TbSearch } from "react-icons/tb";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ icon: Icon, className, ...props }) => {
  return (
    <div className="flex flex-nowrap items-center ">
      {Icon && (
        <div className="absolute px-4 text-gray-500">
          <Icon size={18} />
        </div>
      )}
      <input
        {...props}
        type="text"
        className={clsx({ "pl-12": !!Icon }, " rounded-lg p-2.5", className)}
      />
    </div>
  );
};

export default Input;
