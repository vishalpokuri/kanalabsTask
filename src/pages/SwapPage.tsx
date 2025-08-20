import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { tokenList } from "../data/tokens";
import type { Token } from "../types/declaration";
import Swap from "../components/swapPage/Swap";
import SwapOptions from "../components/swapPage/SwapOptions";
import { Button } from "../components/ui/Button";

function SwapPage() {
  const [selectedToken, setSelectedToken] = useState<Token>("Aptos");
  return (
    <div className="w-full h-full flex flex-col bg-[#080a0a]">
      <Header />
      {/* Chain selector Buttons */}

      <div className="flex-1 flex flex-col justify-center items-center w-full h-full">
        <div className="flex justify-start w-[536px]">
          <ChainSelectorButton type="same" selected={true} />
          <ChainSelectorButton type="cross" selected={false} />
        </div>
        <div className="w-[536px] h-[500px] text-white bg-card border border-[#fff]/10 flex flex-col space-y-4 p-6 rounded-b-xl rounded-tr-xl">
          {/* Swap and options */}
          <SwapOptions />
          {/* Tokens selection */}
          <section className="flex gap-2">
            {tokenList.map((item) => (
              <TokenContainer
                token={item.token}
                tokenUrl={item.tokenUrl}
                selected={item.token === selectedToken}
                onClick={() => setSelectedToken(item.token)}
              />
            ))}
          </section>
          <Swap />
          <Swap />
          <Button variant="secondary">Swap Now</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SwapPage;

interface TokenContainerProps {
  selected: boolean;
  token: string;
  tokenUrl: string;
  onClick: () => void;
}

function TokenContainer({
  selected,
  token,
  tokenUrl,
  onClick,
}: TokenContainerProps) {
  return (
    <div
      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
        selected && "bg-[#FFFFFF0F] border border-[#FFFFFF1A]"
      }`}
      onClick={onClick}
    >
      <img src={tokenUrl} alt={token} />
    </div>
  );
}

function ChainSelectorButton({
  type,
  selected,
}: {
  type: "same" | "cross";
  selected: boolean;
}) {
  return (
    <div
      className={`relative w-38 rounded-t-2xl border-t border-l border-r border-stroke flex items-center justify-center px-4 py-4 gap-2 ${
        selected
          ? "bg-card text-text2 z-10 -mb-px -border-b border-card"
          : "bg-tabs text-text3 z-0"
      }`}
    >
      <img
        src={
          type == "same"
            ? "swapContentIcons/arrowSplit2.svg"
            : "swapContentIcons/arrowsShuffle.svg"
        }
        alt=""
      />
      <p className="font-meb text-xs ">
        {type === "same" ? "Same-chain" : "Cross-chain"}
      </p>
    </div>
  );
}
