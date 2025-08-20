export default function Swap() {
  return (
    <div className="w-full gap-2 px-6 py-4 h-34 bg-[#111213] border rounded-2xl border-[#fff]/10 flex flex-col">
      {/* First row */}
      <div className="flex justify-between flex-1 gap-3">
        <div className="flex flex-col justify-between flex-1 border-b border-b-stroke">
          {/* Title */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-xs font-mr text-[#A5A5A6]">Pay from</span>
              <button className="px-2 py-1 text-cyanpri font-meb rounded text-xs">
                Connect Wallet
              </button>
            </div>
          </div>
          {/* Value */}
          <div className="flex h-full items-center">
            <span className="text-left font-mm text-xl text-text3">0.00</span>
          </div>
        </div>

        {/* Token onchain div */}
        <TokenSelectionDisplay />
      </div>

      {/* Second row  */}
      <div className="h-5 text-text4 text-ml text-xs flex justify-between items-center">
        <div className="font-mm gap-2 flex">
          <span>USD</span> <span className="font-meb">0</span>
        </div>
        <div className="font-mm gap-2 flex">
          <div>Balance</div> <span className="font-meb">-</span>
        </div>
      </div>
    </div>
  );
}

function TokenSelectionDisplay() {
  return (
    <div className="w-40 px-4 py-2 flex h-full items-center gap-3 p-2 bg-card border border-stroke rounded-2xl">
      {/* Left: Rounded full div with dotted border */}
      {/* <div className="relative w-10 h-10 rounded-full border-2 border-dashed border-[#FFFFFF33] flex items-center justify-center bg-[#1D1E20] "> */}
      {/* Icon placeholder */}
      {/* <div className="absolute -right-1 -bottom-0 z-10 w-4 h-4 rounded-full border-2 border-dashed border-[#FFFFFF33] flex items-center justify-center bg-[#1D1E20] -mb-[2px]"></div> */}
      {/* </div> */}

      {/* Outer circle */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <BorderBig />
        {/* Inner circle */}
        <div className="w-10 h-10 rounded-full bg-[#1D1E20] flex items-center justify-center">
          <div className="absolute -right-1 -bottom-0 z-10 w-4 h-4 rounded-full flex items-center justify-center bg-[#1D1E20]">
            <BorderSmall />
          </div>
        </div>
      </div>

      {/* Right: Token and Onchain text */}
      <div className="flex flex-col">
        <span className="text-lg font-semibold text-text2 font-meb">Token</span>
        <p className="text-xs text-text2 font-mm">
          <span className="text-text3 font-mr">on</span> Chain
        </p>
      </div>
    </div>
  );
}

function BorderBig() {
  return (
    <svg className="absolute inset-0" viewBox="0 0 40 40">
      <circle
        cx="20"
        cy="20"
        r="19"
        fill="none"
        stroke="#FFFFFF33"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

function BorderSmall() {
  return (
    <svg className="absolute inset-0" viewBox="0 0 16 16">
      <circle
        cx="8"
        cy="8"
        r="7.5"
        fill="none"
        stroke="#FFFFFF33"
        strokeWidth="1"
        strokeDasharray="2 2"
      />
    </svg>
  );
}
