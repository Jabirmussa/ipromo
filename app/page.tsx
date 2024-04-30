import Image from "next/image";
import { Card } from "./components/ui/card";
import Header from "./components/header";
import Search from "./components/search";

const Home = () => {
  return ( 
    <>
      <Header />
      <div className="p-6 pt-0">
        <Search />
      </div>
    </>
   );
}
 
export default Home;