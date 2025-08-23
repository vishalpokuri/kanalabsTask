import BorderCard from "../components/chartPage/BorderCard";
import ChartLayout from "../components/chartPage/ChartLayout";

import Control from "../components/chartPage/divisions/Controls";
import GraphComponent from "../components/chartPage/divisions/GraphComponent";
import OrderbookandTrades from "../components/chartPage/divisions/OrderbookandTrades";

function ChartPage() {
  return (
    <ChartLayout>
      <div className="flex h-full items-start mt-2 w-full">
        <div className="flex-1 flex justify-start flex-col items-start gap-2 h-full mx-auto py-1 w-full px-2 min-h-0">
          {/*  */}
          <section className="flex flex-1 gap-2 min-h-0 h-full max-h-[600px] w-full">
            <GraphComponent />
            <OrderbookandTrades />
          </section>
          <BorderCard className="w-full p-0 flex flex-col">
            <div className="flex w-full items-center border-b border-stroke text-xs text-white">
              <button className="h-8 px-4 flex items-center justify-center font-meb bg-surface2 border-b-2 border-cyan text-cyan">
                Open Orders
              </button>
              <button className="h-8 px-4 flex items-center justify-center font-mr border-b border-stroke text-text3">
                Positions
              </button>
              <button className="h-8 px-4 flex items-center justify-center font-mr border-b border-stroke text-text3">
                Order History
              </button>
              <button className="h-8 px-4 flex items-center justify-center font-mr border-b border-stroke text-text3">
                Trade History
              </button>
              <button className="h-8 px-4 flex items-center justify-center font-mr border-b border-stroke text-text3">
                Funding History
              </button>
              <button className="h-8 px-4 flex items-center justify-center font-mr border-b border-stroke text-text3">
                Deposit/Withdraw History
              </button>
              <button className="h-8 px-2 flex items-center justify-center font-mr border-b border-stroke text-text3 ml-auto">
                ...
              </button>
            </div>
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <span className="text-text3 text-xs mb-2">
                Sign in to see your Open orders
              </span>
              <button className="text-cyan font-meb text-base">Sign in</button>
            </div>
          </BorderCard>
        </div>
        <Control />
      </div>
    </ChartLayout>
  );
}

export default ChartPage;
