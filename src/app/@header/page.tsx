"use client";

import Input from "@/components/input";
import React from "react";
import {
  TbArrowDown,
  TbArrowDownRhombus,
  TbBell,
  TbChevronDown,
  TbNotification,
  TbSearch,
} from "react-icons/tb";
import Coins from "./coins";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between py-8 pr-10 ">
      <div className="flex flex-nowrap items-center gap-8">
        <div>
          <Input icon={TbSearch} placeholder="Search" />
        </div>
        <div>
          <Coins
            coins={[
              { name: "btc", value: 2000.29, difference: -112.21 },
              { name: "xmr", value: 1200.12, difference: 12 },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-nowrap items-center gap-8">
        <div>
          <Notifications />
        </div>
        <div>
          <Profile />
        </div>
        <div className="rounded-lg bg-white p-2 drop-shadow-sm">
          <TbChevronDown size={18} color="#020617" />
        </div>
      </div>
    </header>
  );
};

const Notifications: React.FC = () => {
  return (
    <div className="rounded-lg bg-white p-2 drop-shadow-sm">
      <TbBell size={24} color="#020617" />
    </div>
  );
};

const Profile: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="h-10 w-10 rounded-full bg-white">
        <img
          className="h-10 w-10 rounded-full grayscale "
          src="https://robohash.org/6714b9b1589ea6a6d9d2e1279c5c8a51?set=set1&bgset=&size=400x400"
          alt="avatar"
        />
      </div>
      <div className="ml-2">
        <div className="text-sm font-medium ">Audrey Horne</div>
      </div>
    </div>
  );
};

export default Header;
