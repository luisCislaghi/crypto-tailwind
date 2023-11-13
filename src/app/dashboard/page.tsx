import React from "react";
import Card from "@/components/card";
import { Wallets } from "./wallets";
import Link from "next/link";
import { DiffRender, MoneyRender } from "./@header/coins";
import { coins } from "@/app/coins";
import { PageTitle } from "@/components/page-title";
import { TbArrowDownRight } from "react-icons/tb";
import Table from "@/components/table";
import NavMenu from "@/components/nav-menu";
import * as Select from "@/components/select";

const Dashboard: React.FC = ({}) => {
  return (
    <div className="flex flex-1 ">
      <div className="flex w-8/12 rounded-3xl bg-white p-12">
        <div className="w-full">
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
              <div className="flex flex-nowrap gap-4">
                <Select.Coins />
                <Select.Coins />
              </div>
              <div className="flex flex-nowrap gap-4">
                {/* <Input.Text />
                <Input.Text /> */}
              </div>
            </Card>
            <Card
              title="Earnings"
              description={<DiffRender value={13.14} />}
              extra={
                <NavMenu
                  items={[
                    { label: "Days", href: "", active: true },
                    { label: "Months", href: "", active: false },
                    { label: "Years", href: "", active: false },
                  ]}
                />
              }
              className="flex-1"
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
                    POS is a cryptocurroncy mechanism for processing
                    transactions and creating new blocks in a blockchain
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
          className="mb-6 flex-1 bg-purple-200"
          bordered={false}
          title="Right time to earn"
        >
          asd
        </Card>
        <Card className="bg-white" bordered={false} title="10 EHT">
          asd
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
