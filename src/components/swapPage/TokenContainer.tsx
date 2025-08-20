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
export default TokenContainer;
