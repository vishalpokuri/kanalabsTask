export default function ChainSelectorButton({
  type,
  selected,
  onClick,
}: {
  type: "same" | "cross";
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`relative w-38 rounded-t-2xl border-t border-l border-r border-stroke flex items-center justify-center px-4 py-4 gap-2 cursor-pointer -mb-px ${
        selected
          ? "bg-card text-text2 z-10 -border-b  border-card"
          : "bg-tabs text-text3 z-0 border-b border-card "
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
      <p className="font-meb text-xs">
        {type === "same" ? "Same-chain" : "Cross-chain"}
      </p>
    </div>
  );
}
