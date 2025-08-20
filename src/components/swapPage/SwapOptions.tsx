function SwapOptions() {
  return (
    <section className="flex justify-between items-center ">
      <p className="text-sm font-mb text-[#fff]/80">Same-chain Swap</p>
      <div className="flex gap-3">
        <button className="p-2 rounded hover:bg-[#222326] transition">
          <img src="/swapContentIcons/refresh.svg" alt="Refresh" />
        </button>
        <button className="p-2 rounded hover:bg-[#222326] transition">
          <img src="/swapContentIcons/settings-03.svg" alt="Settings" />
        </button>
      </div>
    </section>
  );
}

export default SwapOptions;
