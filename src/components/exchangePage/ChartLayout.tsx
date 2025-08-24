import ChartHeader from "./ChartHeader";
import Footer from "../Footer";

type ChartLayoutProps = {
  children: React.ReactNode;
};

function ChartLayout({ children }: ChartLayoutProps) {
  return (
    <div className="w-full h-full flex flex-col bg-background ">
      <ChartHeader />
      <section className="w-full h-full flex flex-1 overflow-auto px-2">
        {children}
      </section>
      <Footer />
    </div>
  );
}

export default ChartLayout;
