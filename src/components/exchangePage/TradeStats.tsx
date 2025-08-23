const statInformation = [
  { left: "126.59", type: "Liq", right: "126.59" },
  { left: "$2,409.23", type: "Value", right: "$2,409.23" },
  { left: "$120.59", type: "Margin", right: "$120.59" },
  { left: "8%", type: "Slippage", right: "8%" },
];

function TradeStats() {
  return (
    <div
      className="w-full max-w-md mx-auto py-2 px-2"
      style={{ fontSize: "8px" }}
    >
      <div className="space-y-1.5">
        {statInformation.map((item, idx) => (
          <StatRow1
            key={idx}
            left={item.left}
            type={item.type}
            right={item.right}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="underline text-disabled font-mr text-xxs">
          Estimated fees
        </span>
        <span className="font-meb text-text3 text-xxs">0.035% / 0.010%</span>
      </div>
    </div>
  );
}

export default TradeStats;

function StatRow1({
  left,
  type,
  right,
}: {
  left: string;
  right: string;
  type: string;
}) {
  return (
    <div className="w-full flex justify-between items-center text-xxs">
      <p className="font-meb text-text3">{left}</p>
      <p className="underline text-disabled font-mb">{type}</p>
      <p className="font-meb text-text3">{right}</p>
    </div>
  );
}
