import Banner from "@/components/Banner";
import ButtonAuth from "@/components/ButtonAuth";

import Rows from "@/components/Rows";
import SearchMovies from "@/components/Search";

function HomePage() {
  return (
    <>
      <Banner/>
      <div className="flex flex-col md:flex-row">
        <SearchMovies/>
        <Rows/>
      </div>
    </>
  );
}

export default HomePage;
