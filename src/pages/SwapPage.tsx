import { useState } from "react";
import { tokenList } from "../data/tokens";
import type { Token } from "../types/declaration";
import Swap from "../components/swapPage/Swap";
import SwapOptions from "../components/swapPage/SwapOptions";
import ChainSelectorButton from "../components/swapPage/ChainSelectorButton";
import TokenContainer from "../components/swapPage/TokenContainer";
import SwapLayout from "../components/swapPage/SwapLayout";
import CustomButton from "../components/ui/CustomButton";

function SwapPage() {
  const [selectedToken, setSelectedToken] = useState<Token>("Aptos");
  const [selectedChain, setSelectedChain] = useState<"same" | "cross">("same");

  return (
    <SwapLayout>
      <div className="flex-1 flex flex-col justify-start mt-4 items-center w-[536px] h-full mx-auto">
        {/* Chain selector Buttons */}
        <div className="flex justify-start w-full">
          <ChainSelectorButton
            type="same"
            selected={selectedChain === "same"}
            onClick={() => setSelectedChain("same")}
          />
          <ChainSelectorButton
            type="cross"
            selected={selectedChain === "cross"}
            onClick={() => setSelectedChain("cross")}
          />
        </div>
        <section className="space-y-3 w-full">
          <div className="w-full h-[500px] bg-card border border-stroke flex flex-col space-y-4 p-6 rounded-b-2xl rounded-tr-2xl ">
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
            <div className="relative flex gap-4 flex-col">
              <Swap type="from" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-lg flex justify-center items-center bg-card border border-stroke">
                <img src="swapContentIcons/switch-vertical-02.svg" alt="" />
              </div>
              <Swap type="to" />
            </div>
            <CustomButton size="large" variant="secondary" type="text">
              Swap Now
            </CustomButton>
          </div>
          {/* Dropdown */}
          <div className="w-full h-16 bg-card border border-stroke rounded-2xl flex flex-row justify-between items-center px-6">
            <div className="font-mr text-sm text-text4">Additional Details</div>
            <img src="public/swapContentIcons/downArrowGrey.svg" alt="" />
          </div>
        </section>
      </div>
    </SwapLayout>
  );
}

export default SwapPage;
