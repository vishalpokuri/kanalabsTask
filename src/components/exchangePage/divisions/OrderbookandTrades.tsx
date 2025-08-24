import TradeTable from "../TradeTable";
import Orderbook from "../Orderbook";
function OrderbookandTrades() {
  return (
    <aside className="w-50 flex flex-col h-full gap-2 max-[1080px]:hidden">
      <div className="flex-1 min-h-0 flex flex-col">
        <Orderbook />
      </div>
      <div className="flex-shrink-0">
        <TradeTable />
      </div>
    </aside>
  );
}

export default OrderbookandTrades;
