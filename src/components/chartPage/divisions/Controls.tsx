import { useState } from "react";
import { Button } from "../../ui/Button";
import BorderCard from "../BorderCard";
import CustomSlider from "../CustomSlider";
import InfoInputCard from "../InfoInputCard";
import MarketLimitContainer from "../MarketLimitContainer";
import OpenClose from "../OpenClose";
import TPSLSelector from "../TPSLSelector";
import TradeStats from "../TradeStats";

function Controls() {
  const [sliderValue, setSliderValue] = useState(50);
  return (
    <aside className="w-60 space-y-2 items-start py-1 mr-1">
      {/* Profile and USDT section */}
      <BorderCard>
        <section className="p-2 flex w-full items-center">
          <div className="flex flex-col justify-start flex-grow text-left">
            <p className="font-mr text-text3" style={{ fontSize: "10px" }}>
              Profile 1
            </p>
            <p className="font-meb text-xs text-text2">0.00 USDT</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded bg-surface2 flex justify-center items-center">
              <img src="chartIcons/downloadIcon.svg" alt="" />
            </div>
            <div className="w-8 h-8 rounded bg-surface2 flex justify-center items-center">
              <img src="chartIcons/uploadIcon.svg" alt="" />
            </div>
          </div>
        </section>
      </BorderCard>

      {/* Isolated and Hedge buttons */}
      <section className="w-full flex items-center justify-center gap-2">
        <BorderCard className="h-7 text-xs border border-stroke flex w-full font-mb text-white items-center justify-center">
          <button>Isolated</button>
        </BorderCard>
        <BorderCard className="h-7 text-xs border border-stroke flex w-full font-mb text-white items-center justify-center">
          <button>Hedge</button>
        </BorderCard>
      </section>
      {/*  */}
      <section>
        <BorderCard className="flex w-full flex-col overflow-clip">
          {/* Open Close selector buttons */}
          <OpenClose />
          {/* MarketLimit selector */}
          <MarketLimitContainer />
          <section className="px-2">
            {/* PriceCard Component */}
            <div className="py-2 space-y-2">
              <InfoInputCard type="price" value="1245689" unit="USDT" />
              <InfoInputCard type="amount" value="1000" unit="USDT" />
            </div>
            {/* Custom Radix */}
            <CustomSlider value={sliderValue} onValueChange={setSliderValue} />
            {/* Buy Sell Info */}
            <section
              style={{ fontSize: "10px" }}
              className="flex justify-between items-center text-white p-2 px-1"
            >
              <div className="flex gap-1">
                <span className="font-mr text-disabled">Buy</span>
                <span className="font-meb text-text3">0.049</span>
              </div>
              <div className="flex gap-1">
                <span className="font-mr text-disabled">Sell</span>
                <span className="font-meb text-text3">0.049</span>
              </div>
            </section>

            {/* TPSLComponent */}
            <TPSLSelector />

            {/* SigninButton */}
            <Button
              type="button"
              variant="secondary"
              className="w-full rounded-xl my-2 text-xs"
              size="small"
            >
              Sign in
            </Button>

            {/* Trade Stats */}
            <TradeStats />
          </section>
        </BorderCard>
      </section>
    </aside>
  );
}

export default Controls;
