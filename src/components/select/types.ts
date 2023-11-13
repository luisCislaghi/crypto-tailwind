import { FC } from "react";
import { SelectProps } from ".";
import * as RadixSelect from "@radix-ui/react-select";
import { IconType } from "react-icons";

export type DefaultSelectExtension = {
  Coins: FC<SelectProps>;
};

export type OptionType = {
  type?: "group" | "item";
  label?: string;
  value?: string;
  icon?: IconType;
  options?: OptionType[];
};
