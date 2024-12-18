import Aside from "@/components/utils/Aside";
import Banner from "@/components/ui/Banner";
import Rows from "@/components/ui/Rows";
import ScrollToUp from "@/components/ui/ScrollToUp";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

function HomePage() {
  return (
    <>
        <Banner />
        <div className="flex flex-col md:flex-row h-full">
          <Aside />
          <Suspense fallback={<Skeleton/>}>
            <Rows />
          </Suspense>
        </div>
        <ScrollToUp />
    </>
  );
}

export default HomePage;
