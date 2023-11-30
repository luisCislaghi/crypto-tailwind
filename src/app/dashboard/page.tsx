import React from "react";
import Card from "@/components/card";
import { Wallets } from "./wallets";
import Link from "next/link";
import { DiffRender, MoneyRender } from "./@header/coins";
import { coins } from "@/app/coins";
import { PageTitle } from "@/components/page-title";
import {
  TbArrowDownRight,
  TbArrowUpRight,
  TbArrowsExchange,
} from "react-icons/tb";
import Table from "@/components/table";
import NavMenu from "@/components/nav-menu";
import Select from "@/components/select";
import Input from "@/components/input";
import Button from "@/components/button";
import Slider from "@/components/slider";

const Dashboard: React.FC = ({}) => {
  return (
    <div className="flex flex-1 ">
      <div className="flex w-8/12 flex-col rounded-3xl bg-white p-12">
        <PageTitle
          title="Overview"
          extra={
            <span className="font-semibold">
              <Link href="">View advantages</Link>
            </span>
          }
        />
        <div className="mb-8 flex">
          <Wallets />
        </div>
        <div className="mb-8 flex gap-8">
          <Card
            className="flex-1 bg-[#ffe0ac]"
            bordered={false}
            title="Operations"
            extra={
              <NavMenu
                items={[
                  { label: "Exchange", href: "", active: true },
                  { label: "Buy", href: "", active: false },
                  { label: "Sell", href: "", active: false },
                  { label: "Send", href: "", active: false },
                ]}
              />
            }
          >
            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <Select.Coins defaultValue="Bitcoin" className="w-full" />
                <Select.Coins defaultValue="Solana" className="w-full" />
              </div>
              <div className="flex gap-5">
                <Input.Currency coin="usd" />
                <Input.Currency coin="btc" />
              </div>
              <div className="flex justify-between gap-5">
                <div className="flex-1 text-sm">
                  <p>Available: $ 107,500.00</p>
                  <p>Rate: 1.00 USD = 3.23 XTZ</p>
                  <p>Fee: $ 13.17</p>
                </div>
                <div className="flex-1">
                  <Button block icon={TbArrowsExchange}>
                    Exchange
                  </Button>
                </div>
              </div>
            </div>
          </Card>
          <Card
            title="Earnings"
            description={<DiffRender className="text-md" value={13.14} />}
            className="flex-1"
            extra={
              <NavMenu
                items={[
                  { label: "Days", href: "", active: true },
                  { label: "Months", href: "", active: false },
                  { label: "Years", href: "", active: false },
                ]}
              />
            }
          >
            <div></div>
          </Card>
        </div>
        <div className="mb-8 flex gap-8">
          <>
            <Card
              title="Top-week PoS Tokens"
              extra={
                <div className="flex font-semibold">View all PoS-tokens</div>
              }
              className="w-7/12"
            >
              <Table
                showHeader={false}
                data={
                  [
                    { id: 1, coin: "sol", diff: -6.2, value: 10.23 },
                    { id: 2, coin: "btc", diff: 12.67, value: 204.32 },
                    { id: 3, coin: "eth", diff: 3.19, value: 64.81 },
                  ] as {
                    id: number;
                    coin: string;
                    diff: number;
                    value: number;
                  }[]
                }
                columns={[
                  {
                    dataIndex: "coin",
                    render: (_, row) => {
                      return (
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-black p-2">
                            {coins[row.coin].icon({
                              color: "white",
                              size: 18,
                            })}
                          </div>
                          <span className="font-bold">
                            {coins[row.coin].name}
                          </span>
                          <span>{row.coin.toUpperCase()}</span>
                        </div>
                      );
                    },
                  },
                  {
                    dataIndex: "diff",
                    render: (_, row) => {
                      return <DiffRender value={row.diff} />;
                    },
                  },
                  {
                    dataIndex: "value",
                    align: "right",
                    render: (_, row) => {
                      return <MoneyRender value={row.value} prefix="$ " />;
                    },
                  },
                ]}
              />
            </Card>
            <Card
              className="flex-1 bg-stone-950"
              bordered={false}
              title={
                <>
                  <span className="text-violet-200">
                    Stack your POS tokens
                    <span className="block text-white"> with Palmer</span>
                  </span>
                </>
              }
            >
              <div className="flex flex-col">
                <p className="mb-2 text-white">
                  POS is a cryptocurroncy mechanism for processing transactions
                  and creating new blocks in a blockchain
                </p>
                <div className="self-end">
                  <Link href="">
                    <div className=" rounded-lg bg-violet-200 p-2 ">
                      <TbArrowDownRight size={32} />
                    </div>
                  </Link>
                </div>
              </div>
            </Card>
          </>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-12">
        <div className="mb-6 flex flex-nowrap justify-start gap-4">
          <Link
            href=""
            className="text-3xl font-semibold underline decoration-2 underline-offset-8"
          >
            Earn
          </Link>
          <Link href="" className="text-3xl font-semibold">
            Borrow
          </Link>
        </div>
        <Card
          className="mb-6 bg-violet-200"
          bordered={false}
          title="Right time to earn"
        >
          <h3 className="mb-5 text-lg font-bold">Token for earning</h3>
          <div className="flex flex-col gap-4">
            <Select.Coins defaultValue="Ethereum" className="w-full" />
            <Input.Currency coin="eth" className="w-full" />
          </div>
          <h3 className="mb-2 mt-6 text-lg font-bold">Loan term</h3>
          <Slider className="w-full" min={1} max={3} />
          <div className="text-md mb-6 flex w-full justify-between font-semibold">
            <span>1 year</span>
            <span>2 years</span>
            <span>3 years</span>
          </div>
          <Button block icon={TbArrowUpRight} size="lg">
            Earn Crypto
          </Button>
        </Card>
        <Card className="bg-white" bordered={false} title="10 EHT">
          asd
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
