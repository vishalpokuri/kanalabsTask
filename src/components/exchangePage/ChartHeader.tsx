import { useState } from "react";
import HeaderButton from "../ui/headerButton";
import HeaderCTACard from "../card/HeaderCTACard";
import type { Tab } from "../../types/declaration";

import {
  Learn,
  Swap,
  Trade,
  Perps,
  Operps,
  Refer,
  DownArrow,
  Star01,
  Coins01,
  Credit,
  InfoCircle,
  UserCircle,
} from "../../Svg/headerIcons/index";
import { Bell, Gear } from "../../Svg/mainIcons";

const headerButtons: { key: Tab; icon: React.ReactNode }[] = [
  { key: "Swap", icon: <Swap width={16} height={16} /> },
  { key: "Trade", icon: <Trade width={16} height={16} /> },
  { key: "Perps", icon: <Perps width={16} height={16} /> },
  { key: "OPerps", icon: <Operps width={16} height={16} /> },
  { key: "Refer", icon: <Refer width={16} height={16} /> },
  { key: "Learn", icon: <Learn width={16} height={16} /> },
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
        <button className="flex items-center justify-center gap-1 px-3 py-2 bg-transparent border-none cursor-pointer text-text2">
          <span className="text-xs font-mb">{"More"}</span>
          <div>
            <DownArrow width={16} height={16} />
          </div>
        </button>
      </div>
      {/* Right Side  */}
      <div className="flex gap-2 pt-1">
        <HeaderCTACard classes="text-xs text-disabled">
          <Star01 width={16} height={16} className="text-disabled" />
          <p className="mr-1">VIP</p>
          <InfoCircle width={16} height={16} className="text-warningd" />
        </HeaderCTACard>
        <HeaderCTACard classes="text-xs text-cyan">
          <Coins01 width={16} height={16} />
          <p className="">Win $20</p>
        </HeaderCTACard>
        <HeaderCTACard classes="text-xs text-cyan">
          <Credit width={16} height={16} />
          <p className="">Deposit</p>
        </HeaderCTACard>
        <HeaderCTACard classes="text-xs text-cyan">
          <UserCircle width={16} height={16} />
          <p className="">Sign in</p>
        </HeaderCTACard>

        <HeaderCTACard classes="text-xs h-8 w-8 relative">
          <Bell width={16} height={16} className="text-text1" />
          <div className="absolute top-0 right-0 w-2 h-2 rounded-lg bg-[#FFB74D]"></div>
        </HeaderCTACard>
        <HeaderCTACard classes="text-xs h-8 w-8">
          <Gear width={16} height={16} className="text-text1" />
        </HeaderCTACard>
      </div>
    </div>
  );
}

export default ChartHeader;
