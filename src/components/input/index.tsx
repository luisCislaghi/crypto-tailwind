import classNames from "classnames";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { IconType, IconBase } from "react-icons";
import { TbSearch } from "react-icons/tb";

const Input: React.FC<
  { icon?: IconType } & React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
> = ({ icon: Icon, className, ...props }) => {
  return (
    <div className="flex flex-nowrap items-center text-gray-500">
      {Icon && (
        <div className="absolute px-4 ">
          <Icon size={18} />
        </div>
      )}
      <input
        {...props}
        type="text"
        className={classNames(
          { "pl-12": !!Icon },
          "w-80 rounded-lg p-2.5",
          className,
        )}
      />
    </div>
  );
};

export default Input;
