import BorderCard from "./BorderCard";

interface TPSLSelectorProps {
  checked?: boolean;
  onCheck?: (checked: boolean) => void;
  onPositionChange?: (position: "long" | "short") => void;
}

function TPSLSelector({
  checked = false,
  onCheck,
  onPositionChange,
}: TPSLSelectorProps) {
  return (
    <BorderCard className="flex items-center justify-between px-2 py-[10px] bg-surface1 border border-[#222] rounded-lg w-full max-w-md">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheck && onCheck(e.target.checked)}
          className="w-4 h-4 rounded border border-stroke bg-[#1C1F20] appearance-none checked:bg-[#1C1F20] checked:border-[#00e6ef] focus:outline-none mr-2"
          style={{ accentColor: "#00e6ef" }}
        />
        <span className="text-text2 font-mr text-xs">TP/SL</span>
      </div>
      <div className="flex items-center gap-3 mr-2">
        <span
          style={{ fontSize: "10px" }}
          className="text-text2 font-mr text-base cursor-pointer opacity-70"
        >
          Long
        </span>
        <span
          style={{ fontSize: "10px" }}
          className="text-text2 font-mr text-base cursor-pointer opacity-70"
        >
          Short
        </span>
      </div>
    </BorderCard>
  );
}

export default TPSLSelector;
