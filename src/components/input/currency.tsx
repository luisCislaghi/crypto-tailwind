import clsx from "clsx";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { IconType, IconBase } from "react-icons";
import { coins } from "@/app/coins";
import Default from "./default";
import { CurrencyInputProps } from "./types";

const Currency: React.FC<CurrencyInputProps> = ({ coin, ...props }) => {
  const coinData = coins[coin];
  const icon = coin === "usd" ? coinData.icon : undefined;
  return <Default icon={icon} {...props} />;
};

export default Currency;
