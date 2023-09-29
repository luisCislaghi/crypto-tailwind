import Card from "@/components/card";
import Link from "next/link";
import React from "react";
import { TbPlus, TbSquareArrowRightFilled } from "react-icons/tb";
import { CoinBalance, DiffRender, MoneyRender } from "./@header/coins";
import { coins } from "@/app/coins";
import clsx from "clsx";

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
    <div className="flex w-full flex-nowrap gap-8 ">
      <div className="max-w-[200px]">
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
        className="min-w-[200px] bg-lime-200"
        bordered={false}
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
            className="min-w-[200px]"
            title={c.name}
            icon={c.icon}
          >
            <>
              <p className="mb-2">
                <MoneyRender
                  value={wallet.value}
                  suffix={` ${c.code.toUpperCase()}`}
                />
              </p>
              <p>
                <DiffRender value={wallet.difference} />
              </p>
            </>
          </Card>
        );
      })}
      <div
        className={clsx(
          "flex items-center justify-center rounded-3xl p-6",
          "bg-dashed-border",
        )}
      >
        <TbPlus size={24} color="#020617" />
      </div>
    </div>
  );
};
