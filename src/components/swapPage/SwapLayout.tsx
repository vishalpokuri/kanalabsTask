import Footer from "../Footer";
import SwapHeader from "./SwapHeader";

type SwapLayoutProps = {
  children: React.ReactNode;
};

function SwapLayout({ children }: SwapLayoutProps) {
  return (
    <div className="w-full h-full flex flex-col bg-background">
      <SwapHeader />
      {children}
      <Footer />
    </div>
  );
}

export default SwapLayout;
