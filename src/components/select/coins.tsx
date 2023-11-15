"use client";

import Select from "./default";
import React, { FC, Ref } from "react";
import { coins } from "@/app/coins";
import { OptionType, SelectProps } from "./types";

const Coins: FC<SelectProps> = (props) => {
  const options: OptionType[] = Object.values(coins).map((coin) => ({
    value: coin.name,
    label: coin.name,
    icon: coin.icon,
  }));
  return <Select {...props} options={options} placeholder="Select a coin" />;
};

export default Coins;
