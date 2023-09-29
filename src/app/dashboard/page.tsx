import React from "react";
import Card from "@/components/card";
import { Wallets } from "./wallets";
import Link from "next/link";
import { DiffRender } from "./@header/coins";
import { PageTitle } from "@/components/page-title";

const Dashboard: React.FC = ({}) => {
  return (
    <div className="flex w-full flex-nowrap">
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
          <div className="mb-8 flex w-full">
            <Wallets />
          </div>
          <div className="mb-8 flex  w-full flex-nowrap gap-8">
            <Card
              className="bg-orange-100"
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
            >
              <div></div>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex-1 flex-wrap  p-12">
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
          className="w-full  bg-purple-200"
          bordered={false}
          title="Right time to earn"
        ></Card>
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
