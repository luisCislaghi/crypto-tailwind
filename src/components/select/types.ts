import type * as RadixSelect from "@radix-ui/react-select";
import { FC } from "react";
import { IconType } from "react-icons";

export type DefaultSelectExtension = {
  Coins: FC<SelectProps>;
};

export type OptionGroupProps = {
  label?: string;
  icon?: IconType;
  options?: OptionProps[];
};

export type OptionProps = {
  label?: string;
  value: string;
  icon?: IconType;
};

export type OptionType = OptionGroupProps | OptionProps;

export type SelectProps = RadixSelect.SelectProps &
  Pick<RadixSelect.SelectValueProps, "placeholder"> & {
    options?: OptionType[];
    className?: string;
  };
