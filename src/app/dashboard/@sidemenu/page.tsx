"use client";

import React, { ReactNode } from "react";
import {
  TbWallet,
  TbCoins,
  TbLayoutGrid,
  TbTransfer,
  TbCompass,
  TbCurrencyBitcoin,
} from "react-icons/tb";
import { IconType } from "react-icons";
import clsx from "clsx";

const SideMenu: React.FC = () => {
  return (
    <div className="flex flex-col flex-wrap p-8">
      <div className="rounded-lg bg-purple-200 p-3">
        <TbCurrencyBitcoin size={20} color="#020617" />
      </div>
      <nav className="flex min-h-screen flex-col flex-wrap justify-center gap-8">
        <Item active icon={TbLayoutGrid} />
        <Item icon={TbCoins} />
        <Item icon={TbWallet} />
        <Item icon={TbTransfer} />
        <Item icon={TbCompass} />
      </nav>
    </div>
  );
};

const Item: React.FC<{ active?: boolean; icon: IconType }> = ({
  active,
  icon: Icon,
}) => {
  return (
    <div
      className={clsx(
        "rounded-lg p-3 hover:cursor-pointer",
        active ? "bg-black" : "bg-white",
      )}
    >
      <Icon color={active ? "white" : "#020617"} size={20} />
    </div>
  );
};

export default SideMenu;
