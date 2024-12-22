import Aside from "@/components/utils/Aside";
import Banner from "@/components/ui/Banner";
import Rows from "@/components/ui/Rows";
import ScrollToUp from "@/components/ui/ScrollToUp";

function HomePage() {
  return (
    <>
      <Banner />
      <div className="flex flex-col md:flex-row h-full">
        <Aside />
        <Rows />
      </div>
      <ScrollToUp />
    </>
  );
}

export default HomePage;
