function OpenClose() {
  return (
    <div className="flex w-full items-center justify-center text-white text-xs ">
      <button
        className={`h-8 w-full flex items-center justify-center px-4 ${
          true
            ? "bg-surface2 border-b border-cyan"
            : "border-b-px border-stroke"
        }`}
      >
        <span className={true ? "font-meb" : "font-mr"}>Open</span>
      </button>
      <button
        className={`h-8 w-full flex items-center justify-center px-4 ${
          false
            ? "bg-surface2 border-b border-cyan"
            : "border-b border-stroke text-text3"
        }`}
      >
        <span className={false ? "font-meb" : "font-mr"}>Close</span>
      </button>
    </div>
  );
}

export default OpenClose;
