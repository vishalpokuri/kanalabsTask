import BorderCard from "../components/exchangePage/BorderCard";
import ChartLayout from "../components/exchangePage/ChartLayout";

import Control from "../components/exchangePage/divisions/Controls";
import GraphComponent from "../components/exchangePage/divisions/GraphComponent";
import OrderbookandTrades from "../components/exchangePage/divisions/OrderbookandTrades";

import React, { useState } from "react";

const tabs = [
  "Open Orders",
  "Positions",
  "Order History",
  "Trade History",
  "Funding History",
  "Deposit/Withdraw History",
];

type TabButtonProps = {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

function TabButton({ active, children, onClick, className }: TabButtonProps) {
  return (
    <button
      className={`h-8 px-4 flex items-center justify-center border-b ${
        active
          ? "bg-surface2 border-b-2 border-cyan text-text1 font-meb"
          : "border-none text-text3 font-mr"
      } ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function OrdersTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <BorderCard className="w-full p-0 flex flex-col h-[200px] overflow-clip">
      <div className="flex w-full items-center border-b border-stroke text-xs text-white">
        {tabs.map((tab, idx) => (
          <TabButton
            key={tab}
            active={activeTab === idx}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </TabButton>
        ))}
        <TabButton active={false} onClick={() => {}} className="px-2 ml-auto">
          ...
        </TabButton>
      </div>
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <span className="text-text3 text-xxs mb-2 font-mr">
          Sign in to see your {tabs[activeTab]}
        </span>
        <button className="text-cyan font-meb text-xs">Sign in</button>
      </div>
    </BorderCard>
  );
}

function ExchangePage() {
  return (
    <ChartLayout>
      <div className="flex items-start mt-2 w-full">
        <div className="flex-1 flex justify-start flex-col items-start gap-2 h-full mx-auto py-1 w-full px-2 min-h-0">
          {/*  */}
          <section className="flex gap-2 h-[600px] max-h-[600px] w-full">
            <GraphComponent />
            <OrderbookandTrades />
          </section>
          <OrdersTabs />
        </div>
        <Control />
      </div>
    </ChartLayout>
  );
}

export default ExchangePage;
