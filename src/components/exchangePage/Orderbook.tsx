import { orderbookSell, orderbookBuy } from "../../data/orderbook";
import type { OrderEntryProps } from "../../types/declaration";
import BorderCard from "./BorderCard";

function Orderbook() {
  return (
    <BorderCard className="w-full flex flex-col overflow-clip h-full">
      <header className="px-3 py-2 border-b border-b-stroke text-left font-meb text-xs text-text1">
        OrderBook
      </header>
      {/* Headers for Pricing */}
      <div className="grid grid-cols-3 p-2 pb-1 text-xxs font-mb">
        <div className="flex flex-col items-start">
          <p className="text-text2 leading-2">Price</p>
          <p className="text-disabled">(eUSDT)</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-text2 leading-2">Size</p>
          <p className="text-disabled">(eAPT)</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-text2 leading-2">Sum</p>
          <p className="text-disabled">(eAPT)</p>
        </div>
      </div>
      {/* Entries */}
      <section className="overflow-y-auto flex-1 min-h-0">
        <div className="w-full">
          {orderbookSell.map((item, idx) => (
            <OrderEntry
              type={"sell"}
              key={idx}
              price={item.price}
              size={item.size}
              sum={item.sum}
              percentage={item.percentage}
            />
          ))}
        </div>
        <div className="font-dr items-center flex flex-row px-2 ">
          <p className=" text-lg text-errord mr-1">2345.5</p>
          <img src="arrowIcons/downFullArrow.svg" alt="" />
          <p className="text-sm underline ml-2 text-text3 ">2345.6</p>
        </div>
        <div className="w-full">
          {orderbookBuy.map((item, idx) => (
            <OrderEntry
              type={"buy"}
              key={idx}
              price={item.price}
              size={item.size}
              sum={item.sum}
              percentage={item.percentage}
            />
          ))}
        </div>
      </section>
    </BorderCard>
  );
}

export default Orderbook;

function OrderEntry({ price, size, sum, percentage, type }: OrderEntryProps) {
  return (
    <div className="relative h-4 px-2 grid grid-cols-3 items-center text-xxs font-dr">
      <div
        className={`absolute right-0 top-0 h-full ${
          type === "sell" ? "bg-[#FF55551F]" : "bg-[#00F9A91F]"
        }`}
        style={{ width: `${percentage}%` }}
      />

      <p
        className={`text-left ${
          type === "sell" ? "text-errord" : "text-successd"
        }`}
      >
        {Number(price).toFixed(3)}
      </p>
      <p className="text-right text-text3">{Number(size).toFixed(3)}</p>
      <p className="text-right text-text3">{Number(sum).toFixed(3)}</p>
    </div>
  );
}
