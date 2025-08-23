export type Tab = "Swap" | "Trade" | "Perps" | "OPerps" | "Refer" | "Learn";

export type Token =
  | "Aptos"
  | "zksync"
  | "bsc"
  | "polygon"
  | "Arbitrum"
  | "Avalanche"
  | "ethereum"
  | "solana"
  | "sui";

export interface OrderEntryProps {
  price: number;
  size: number;
  sum: number;
  percentage: number;
  type: "buy" | "sell";
}
