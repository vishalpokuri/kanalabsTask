import BorderCard from "../components/chartPage/BorderCard";
import ChartLayout from "../components/chartPage/ChartLayout";
import MarketLimitContainer from "../components/chartPage/MarketLimitContainer";
import OpenClose from "../components/chartPage/OpenClose";

function ChartPage() {
  return (
    <ChartLayout>
      <div className="flex-1 flex flex-col justify-start mt-4 items-center h-full mx-auto py-1">
        <aside className="w-60 space-y-2">
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
            <BorderCard classes="h-7 text-xs border border-stroke flex w-full font-mb text-white items-center justify-center">
              <button>Isolated</button>
            </BorderCard>
            <BorderCard classes="h-7 text-xs border border-stroke flex w-full font-mb text-white items-center justify-center">
              <button>Hedge</button>
            </BorderCard>
          </section>
          {/*  */}
          <section>
            <BorderCard classes="flex w-full flex-col overflow-clip">
              <OpenClose />
              <MarketLimitContainer />
              {/* PriceCard Component */}
              <BorderCard classes="flex-col p-2 mx-1 bg-[#111] border border-[#222] rounded-xl w-full max-w-xs ">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-[#888]">Price</span>
                  <span className="text-xs text-[#00e6ef] font-semibold">
                    Mid
                  </span>
                </div>
                <div className="flex justify-b  etween items-center px-1 py-2 bg-[#181818] rounded-lg">
                  <span className="text-2xl text-white tracking-wide">
                    1245689
                  </span>
                  <span className="text-base text-white font-bold">USDT</span>
                </div>
              </BorderCard>
            </BorderCard>
          </section>
        </aside>
      </div>
    </ChartLayout>
  );
}

export default ChartPage;
