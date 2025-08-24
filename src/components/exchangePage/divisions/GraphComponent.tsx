import { ChevronDownIcon } from "../../../Svg/Icons";
import BorderCard from "../BorderCard";

const info: InfoDivProps[] = [
  { title: "Mark", value: "$7.32" },
  { title: "24h Change", value: "+2 %", status: "up" },
  { title: "Oracle Price", value: "$11.1" },
  { title: "24h Volume", value: "$245,964,542" },
];

function GraphComponent() {
  return (
    <div className="flex flex-1 h-full w-full flex-col gap-2 min-h-0">
      {/* Header */}
      <BorderCard className="w-full text-white h-12 flex-shrink-0 flex">
        <div className="border-r border-r-stroke justify-center items-center flex gap-2 w-50">
          <img src="chartIcons/tokenSet.svg" alt="" className="" />
          <p className="font-meb text-base text-text2">APT - PERP</p>
          <ChevronDownIcon className="text-text2" size={24} />
        </div>
        <section className="grid grid-cols-5 flex-1">
          {info.map((item, idx) => (
            <InfoDiv
              key={idx}
              title={item.title}
              value={item.value}
              status={item.status}
            />
          ))}
          <div className="grid grid-cols-5 gap-2 px-1 py-2 text-left">
            <div className="px-1 col-span-2">
              <div className="text-xxs font-mr underline dotted-underline text-text3">
                Funding
              </div>
              <div className="font-meb text-xs text-warningd">0.012%</div>
            </div>
            <div className="px-1 col-span-3">
              <div className="text-xxs font-mr underline dotted-underline text-text3">
                Next funding
              </div>
              <div className="font-meb text-xs text-text2">00:23:34</div>
            </div>
          </div>
        </section>
      </BorderCard>
      {/* Graph */}
      <div className="flex-1 min-h-0 flex">
        <BorderCard className="h-full w-full border-stroke bg-surface1 text-text2 flex items-center justify-center text-xxs font-mr">
          Graph
        </BorderCard>
      </div>
    </div>
  );
}

export default GraphComponent;

type InfoDivProps = {
  title: string;
  value: string | number;
  status?: "up" | "down";
};

function InfoDiv({ title, value, status }: InfoDivProps) {
  return (
    <div className="border-r border-r-stroke p-2 px-4 text-left">
      <div className="text-xxs font-mr underline dotted-underline text-text3">
        {title}
      </div>
      <div
        className={`font-meb text-xs text-text2 ${
          status === "up"
            ? "text-successd"
            : status === "down"
            ? "text-errord"
            : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
}
