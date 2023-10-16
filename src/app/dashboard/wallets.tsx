import Card from "@/components/card";
import Link from "next/link";
import React from "react";
import {
  TbCurrencyDollar,
  TbPlus,
  TbSquareArrowRightFilled,
} from "react-icons/tb";
import { CoinBalance, DiffRender, MoneyRender } from "./@header/coins";
import { coins } from "@/app/coins";

export const Wallets: React.FC = () => {
  const wallets: CoinBalance[] = ["sol", "eth"].map(
    (e) =>
      ({
        name: e,
        value: 12850.32,
        difference: 8.24,
      }) as CoinBalance,
  );

  return (
    <div className="flex flex-1 flex-nowrap gap-8">
      <div className="flex flex-1 flex-nowrap gap-8">
        <div className="flex-1">
          <h2 className="mb-4 text-3xl font-bold">Wallets</h2>
          <p className="mb-4 font-semibold">
            Start investing, earn crypto and stack tokens
          </p>
          <Link href="" className="font-semibold">
            <span className="flex flex-nowrap items-center gap-2">
              View all wallets
              <TbSquareArrowRightFilled size={20} color="#020617" />
            </span>
          </Link>
        </div>
        <Card
          size="small"
          className="flex-1 bg-lime-200"
          bordered={false}
          icon={TbCurrencyDollar}
          title="Dollar"
        >
          <div className="flex-row">
            <div className="font-semibold">Total balance</div>
            <div>
              <MoneyRender value={107050.0} prefix="$ " />
            </div>
          </div>
        </Card>
        {wallets.map((wallet) => {
          const c = coins[wallet.name];
          return (
            <Card
              key={wallet.name}
              size="small"
              className="flex-1"
              title={c.name}
              icon={c.icon}
            >
              <>
                <div className="mb-2">
                  <MoneyRender
                    value={wallet.value}
                    suffix={` ${c.code.toUpperCase()}`}
                  />
                </div>
                <div>
                  <DiffRender value={wallet.difference} />
                </div>
              </>
            </Card>
          );
        })}
      </div>
      <div
        className={
          "flex items-center justify-center rounded-3xl bg-dashed-border p-6 hover:cursor-pointer"
        }
      >
        <TbPlus size={24} color="#020617" />
      </div>
    </div>
  );
};
