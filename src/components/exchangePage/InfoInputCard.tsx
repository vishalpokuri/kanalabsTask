import { SwitchHorizontal } from "../../Svg/chartIcons";
import BorderCard from "./BorderCard";

interface InfoInputCardProps {
  type: "price" | "amount";
  value: string;
  unit: string;
}

function InfoInputCard({ type, value, unit }: InfoInputCardProps) {
  return (
    <BorderCard className="flex-col p-0.5 pb-1 bg-surface1 border border-stroke rounded w-full max-w-xs px-2">
      <div className="flex justify-between items-center py-0.5">
        <span className="text-[#888] font-mr" style={{ fontSize: "8px" }}>
          {type === "price" ? "Price" : "Amount"}
        </span>
        {type === "price" && (
          <span
            className="text-xs text-[#00e6ef] font-meb"
            style={{ fontSize: "9px" }}
          >
            Mid
          </span>
        )}
      </div>
      <div className="flex justify-between items-center px-1 py-2 bg-surface0 rounded-lg border border-stroke">
        <span className="font-mr text-sm text-text2 px-1">{value}</span>
        <span className="text-text1 font-meb px-1 flex items-center gap-0.5 leading-0 text-xxs">
          {unit}
          {type === "amount" && <SwitchHorizontal />}
        </span>
      </div>
    </BorderCard>
  );
}

export default InfoInputCard;
