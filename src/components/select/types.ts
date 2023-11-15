import type * as RS from "@radix-ui/react-select";
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

export type SelectProps = RS.SelectProps &
  Pick<RS.SelectValueProps, "placeholder"> & {
    options?: OptionType[];
    classNames?: string;
  };
