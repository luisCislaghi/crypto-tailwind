import classNames from "classnames";
import React from "react";
import { IconType } from "react-icons";
import {
  TbArrowDownRight,
  TbArrowUpRight,
  TbCoinBitcoin,
  TbCoinMonero,
  TbLine,
  TbMinus,
  TbPointFilled,
} from "react-icons/tb";

// import { Container } from './styles';

type Coin = {
  name: "btc" | "xmr";
  value: number;
  difference: number;
};

const logos = {
  btc: TbCoinBitcoin,
  xmr: TbCoinMonero,
} as const;

const names = {
  btc: "Bitcoin",
  xmr: "Monero",
} as const;

const shortNames = {
  btc: "BTC",
  xmr: "XMR",
} as const;

const formatMoney = (num: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
};

const formatPerc = (num: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2,
  }).format(num / 100);
};

const Coins: React.FC<{ coins: Coin[] }> = ({ coins }) => {
  return (
    <div className="flex flex-nowrap items-center gap-4">
      {coins.map((coin, i) => (
        <>
          {i !== 0 && <TbPointFilled size={24} className="text-slate-400" />}
          <Coin coin={coin} />
        </>
      ))}
    </div>
  );
};

const Coin: React.FC<{ coin: Coin }> = ({ coin }) => {
  var n = Math.abs(coin.value);
  var decimal = n - Math.floor(n);

  const diff = coin.difference === 0 ? 0 : coin.difference > 0 ? 1 : 2;

  const icons = [TbMinus, TbArrowUpRight, TbArrowDownRight] as const;
  const colors = ["bg-slate-400", "bg-green-500", "bg-yellow-500"] as const;

  return (
    <div className="flex flex-nowrap items-center gap-4 text-sm">
      <div className="flex flex-nowrap items-center gap-2">
        <div className="rounded-full bg-black p-1">
          {logos[coin.name]({ size: 18, color: "white" })}
        </div>
        <div className="font-semibold">{names[coin.name]}</div>
        <div className="text-slate-400">{shortNames[coin.name]}</div>
      </div>
      <div>
        <span className="font-semibold">{formatMoney(coin.value)}</span>
        <span>{decimal.toString().slice(1, 4)}</span>
      </div>
      <div className="flex flex-nowrap items-center gap-2">
        <div
          className={`flex h-fit items-center rounded-lg px-1 ${colors[diff]}`}
        >
          {icons[diff]({ size: 12, color: "white" })}
        </div>
        <span className="text-xs font-semibold">
          {formatPerc(coin.difference)}
        </span>
      </div>
    </div>
  );
};

export default Coins;
