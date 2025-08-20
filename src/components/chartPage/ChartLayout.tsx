import ChartHeader from "./ChartHeader";
import Footer from "../Footer";

type ChartLayoutProps = {
  children: React.ReactNode;
};

function ChartLayout({ children }: ChartLayoutProps) {
  return (
    <div className="w-full h-full flex flex-col bg-[#080a0a]">
      <ChartHeader />
      {children}
      <Footer />
    </div>
  );
}

export default ChartLayout;
