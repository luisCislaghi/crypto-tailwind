import * as RadixSelect from "@radix-ui/react-select";
import { TbCheck, TbChevronDown, TbChevronUp } from "react-icons/tb";
import clsx from "clsx";
import React, { FC, Ref } from "react";
import { coins } from "@/app/coins";
import { IconType } from "react-icons";
import SelectItem from "./item";
import { DefaultSelectExtension, OptionType } from "./types";

const Option: FC<OptionType> = ({
  type = "item",
  label,
  options,
  ...props
}) => {
  if (type === "group") {
    return (
      <RadixSelect.Group className="text-xs leading-6" key={label}>
        <RadixSelect.Label className="SelectLabel">{label}</RadixSelect.Label>
        {options?.map((option: OptionType) => <Option {...option} />)}
      </RadixSelect.Group>
    );
  }
  return (
    <SelectItem value={label || "99"} {...props}>
      {label}
    </SelectItem>
  );
};
export default Option;
