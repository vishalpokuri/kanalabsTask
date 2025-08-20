import { useState } from "react";
import HeaderButton from "./ui/headerButton";
import type { Tab } from "../types/declaration";
import GrayCard from "./card/GrayCard";
const headerButtons: { key: Tab; icon: string }[] = [
  { key: "Swap", icon: "headerIcons/swap.svg" },
  { key: "Trade", icon: "headerIcons/trade.svg" },
  { key: "Perps", icon: "headerIcons/perps.svg" },
  { key: "OPerps", icon: "headerIcons/Operps.svg" },
  { key: "Refer", icon: "headerIcons/refer.svg" },
  { key: "Learn", icon: "headerIcons/learn.svg" },
];

function Header() {
  const [tab, setTab] = useState<Tab>("Swap");
  return (
    <div className="justify-between w-full h-12 border-b border-b-[#fff]/10 text-white flex items-center px-4">
      {/* Left Side  */}
      <div className="flex">
        <img src="/mainIcons/kanaLabs.svg" alt="" />
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
          <img src="mainIcons/userCircle.svg" alt="" />
          <p className="font-mb text-[#00fff0]">Connect Wallet</p>
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

export default Header;
