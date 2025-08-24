import { useState } from "react";
import { ChevronRightIcon } from "../../Svg/Icons";

function MarketLimitContainer() {
  const [selected, setSelected] = useState<"market" | "limit">("market");

  return (
    <div className="flex gap-2 h-10 justify-between w-full items-center pr-2">
      {/* Market and Limit buttons */}
      <div className="h-full">
        <button
          className={`px-3 h-full font-meb text-xs focus:outline-none ${
            selected === "market"
              ? "border-b-1 border-cyan text-text1"
              : "text-text3"
          }`}
          onClick={() => setSelected("market")}
        >
          Market
        </button>
        <button
          className={`px-3 h-full font-meb text-xs focus:outline-none ${
            selected === "limit"
              ? "border-b-1 border-cyan text-text1"
              : "text-text3"
          }`}
          onClick={() => setSelected("limit")}
        >
          Limit
        </button>
      </div>
      {/* 2x button */}
      <button className="rounded-lg px-2 py-1 font-meb text-cyan text-xs bg-surface2 border-none ml-2 flex items-center justify-center h-6">
        <span className="text-xs">2x</span>
        <ChevronRightIcon className="text-cyan" />
      </button>
    </div>
  );
}

export default MarketLimitContainer;
