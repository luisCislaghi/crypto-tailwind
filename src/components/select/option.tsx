import * as RadixSelect from "@radix-ui/react-select";
import React, { FC } from "react";
import SelectItem, { SelectItemProps } from "./item";
import { OptionProps, OptionGroupProps } from "./types";

export const OptionGroup: FC<OptionGroupProps> = ({ label, options }) => {
  return (
    <RadixSelect.Group className="text-xs leading-6" key={label}>
      <RadixSelect.Label className="">{label}</RadixSelect.Label>
      {options?.map((option: OptionProps) => <OptionItem {...option} />)}
    </RadixSelect.Group>
  );
};

export const OptionItem: FC<OptionProps> = React.forwardRef<
  HTMLDivElement,
  SelectItemProps
>(({ children, ...props }, forwardedRef) => {
  return (
    <SelectItem {...props} ref={forwardedRef}>
      {children}
    </SelectItem>
  );
});

export default Object.assign(OptionItem, { Group: OptionGroup });
