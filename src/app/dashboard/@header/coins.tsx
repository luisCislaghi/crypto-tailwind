import React from "react";
import { TbArrowDownRight, TbArrowUpRight, TbMinus } from "react-icons/tb";
import { coins } from "@/app/coins";

export type CoinBalance = {
  name: keyof typeof coins;
  value: number;
  difference: number;
};

const formatDecimal = (num: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(num);
};

const formatPerc = (num: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2,
  }).format(num / 100);
};

const Coins: React.FC<{ coins: CoinBalance[] }> = ({ coins }) => {
  return (
    <div className="flex flex-nowrap items-center gap-4">
      {coins.map((coin, i) => (
        <div key={coin.name}>
          {i !== 0 && <div className="h-2 w-2 rounded-sm bg-stone-300" />}
          <Coin coin={coin} />
        </div>
      ))}
    </div>
  );
};

const Coin: React.FC<{ coin: CoinBalance }> = ({ coin }) => {
  const coinInfo = coins[coin.name];
  return (
    <div className="flex flex-nowrap items-center gap-4 text-sm">
      <div className="flex flex-nowrap items-center gap-2">
        <div className="rounded-full bg-black p-1">
          {coinInfo.icon({ color: "white" })}
        </div>
        <div className="font-bold">{coinInfo.name}</div>
        <div className="text-stone-400">{coinInfo.code.toUpperCase()}</div>
      </div>
      <div>
        <MoneyRender value={coin.value} prefix="$" />
      </div>
      <DiffRender value={coin.difference} />
    </div>
  );
};

export default Coins;

export const MoneyRender = ({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) => {
  var decimal = parseFloat((value % 1).toFixed(12))
    .toString()
    .substring(1);
  return (
    <>
      <span className="font-bold">
        {prefix}
        {formatDecimal(value)}
      </span>
      <span>
        {decimal}
        {suffix}
      </span>
    </>
  );
};

export const DiffRender = ({ value }: { value: number }) => {
  const diff = value === 0 ? 0 : value > 0 ? 1 : 2;

  const icons = [TbMinus, TbArrowUpRight, TbArrowDownRight] as const;
  const colors = ["bg-stone-400", "bg-green-500", "bg-yellow-500"] as const;

  return (
    <>
      <div className="flex flex-nowrap items-center gap-2">
        <div
          className={`flex h-fit items-center rounded-lg px-1 ${colors[diff]}`}
        >
          {icons[diff]({ size: 12, color: "white" })}
        </div>
        <span className="text-xs font-semibold">{formatPerc(value)}</span>
      </div>
    </>
  );
};
