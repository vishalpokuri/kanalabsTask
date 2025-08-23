import BorderCard from "./BorderCard";

interface Trade {
  price: string;
  size: string;
  time: string;
  side: "buy" | "sell";
  link?: string;
}

const trades: Trade[] = [
  { price: "5.660", size: "23.234", time: "12:36:28", side: "buy", link: "#" },
  { price: "5.660", size: "23.234", time: "12:35:28", side: "sell", link: "#" },
  { price: "5.660", size: "23.234", time: "12:35:28", side: "buy", link: "#" },
  { price: "5.660", size: "23.234", time: "12:35:28", side: "sell", link: "#" },
  { price: "5.660", size: "23.234", time: "12:35:28", side: "buy", link: "#" },
];

function TradeTable() {
  return (
    <BorderCard className="flex flex-col">
      <header className="px-3 py-2 border-b border-b-stroke text-left font-meb text-xs text-text1">
        Trades
      </header>
      <div className="">
        <div className="flex text-xxs text-text3 font-mr py-1 text-center bg-surface1 border-b border-b-stroke ">
          <div className="w-10">
            <span>Price</span>
          </div>
          <div className="w-[60px]">
            <span className="w-full">Size</span>
          </div>
          <div className="w-18">
            <span>Time</span>
          </div>
          <div className="flex-1 flex"></div>
        </div>
        {trades.map((trade, idx) => (
          <div
            key={idx}
            className="flex items-center border-b border-[#222] last:border-b-0 font-dr text-xxs py-1"
          >
            <div
              className={`w-10 ${
                trade.side === "buy" ? "text-green-400" : "text-red-400"
              }`}
            >
              {trade.price}
            </div>
            <div className="w-15 text-text2">{trade.size}</div>
            <div className="w-18 text-text2">{trade.time}</div>
            <div className=" flex-1 flex items-center justify-center">
              <a
                href={trade.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyanpri"
              >
                <img src="chartIcons/link-external-02.svg" alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </BorderCard>
  );
}

export default TradeTable;
