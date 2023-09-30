import React from "react";
import Card from "@/components/card";
import { Wallets } from "./wallets";
import Link from "next/link";
import { DiffRender } from "./@header/coins";
import { PageTitle } from "@/components/page-title";
import { TbArrowDownRight } from "react-icons/tb";

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
              extra={<Extra />}
            >
              <div></div>
            </Card>
            <Card
              title="Earnings"
              description={<DiffRender value={13.14} />}
              extra={<Extra />}
              className="flex-1"
            >
              <div></div>
            </Card>
          </div>
          <div className="mb-8 flex gap-8">
            <>
              <Card
                title="Top-week PoS Tokens"
                extra={<div className="flex">View all PoS-tokens</div>}
                className="w-7/12"
              >
                asdasd
              </Card>
              <Card
                className="flex-1 bg-stone-950"
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
const Extra = () => {
  return (
    <ul className="flex flex-nowrap gap-6">
      <li className="font-semibold underline underline-offset-4">Exchange</li>
      <li className="font-semibold">Buy</li>
      <li className="font-semibold">Sell </li>
      <li className="font-semibold">Send</li>
    </ul>
  );
};

export default Dashboard;
