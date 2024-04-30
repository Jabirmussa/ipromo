import Image from "next/image";
import { Card } from "./components/ui/card";
import Header from "./components/header";
import Search from "./components/search";
import CategoryList from "./components/category-list";

const Home = () => {
  return ( 
    <>
      <Header />
      <div className="p-6 pt-0">
        <Search />
      </div>
      <div className="px-6">
        <CategoryList />
      </div>
    </>
   );
}
 
export default Home;