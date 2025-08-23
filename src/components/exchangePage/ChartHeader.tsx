import { useState } from "react";
import HeaderButton from "../ui/headerButton";
import GrayCard from "../card/GrayCard";
import type { Tab } from "../../types/declaration";

const headerButtons: { key: Tab; icon: string }[] = [
  { key: "Swap", icon: "headerIcons/swap.svg" },
  { key: "Trade", icon: "headerIcons/trade.svg" },
  { key: "Perps", icon: "headerIcons/perps.svg" },
  { key: "OPerps", icon: "headerIcons/Operps.svg" },
  { key: "Refer", icon: "headerIcons/refer.svg" },
  { key: "Learn", icon: "headerIcons/learn.svg" },
];

function ChartHeader() {
  const [tab, setTab] = useState<Tab>("Swap");
  return (
    <div className="justify-between w-full h-12 text-white flex items-center px-2">
      {/* Left Side  */}
      <div className="flex">
        <img src="/mainIcons/kanaLabs.svg" alt="" className="ml-1" />
        <div className="ml-8 flex">
          {headerButtons.map((item) => (
            <HeaderButton
              text={item.key}
              svg={item.icon}
              onClick={() => setTab(item.key)}
              selected={item.key === tab}
            />
          ))}
        </div>
        {/* More button */}
        <button className="flex items-center justify-center gap-1 px-3 py-2 bg-transparent border-none cursor-pointer text-[#fff]/80">
          <span className="text-xs font-mb">{"More"}</span>
          <img
            src={"headerIcons/downArrow.svg"}
            className="flex items-center"
          />
        </button>
      </div>

      {/* Right Side  */}
      <div className="flex gap-2 pt-1">
        <GrayCard classes="text-xs">
          <img src="headerIcons/star-01.svg" alt="" />
          <p className="font-mb text-[#00fff0] mr-1">VIP</p>
          <img src="headerIcons/info-circle.svg" alt="" />
        </GrayCard>
        <GrayCard classes="text-xs">
          <img src="headerIcons/coins-01.svg" alt="" />
          <p className="font-mb text-[#00fff0]">Win $20</p>
        </GrayCard>
        <GrayCard classes="text-xs">
          <img src="headerIcons/credit.svg" alt="" />
          <p className="font-mb text-[#00fff0]">Deposit</p>
        </GrayCard>

        <GrayCard classes="text-xs h-8 w-8 relative">
          <img src="mainIcons/bell.svg" alt="" className="" />
          <div className="absolute top-0 right-0 w-2 h-2 rounded-lg bg-[#FFB74D]"></div>
        </GrayCard>
        <GrayCard classes="text-xs h-8 w-8">
          <img src="mainIcons/gear.svg" alt="" />
        </GrayCard>
      </div>
    </div>
  );
}

export default ChartHeader;
