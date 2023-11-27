"use client";

import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { coins } from "@/app/coins";
import Default from "./default";
import { CurrencyInputProps } from "./types";

const Currency: React.FC<CurrencyInputProps> = ({ coin, ...props }) => {
  const coinData = coins[coin];
  return <Default type="number" icon={coinData.icon} {...props} />;
};

export default Currency;
