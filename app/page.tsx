import Image from "next/image";
import { Card } from "./components/ui/card";
import Header from "./components/header";
import Search from "./components/search";
import CategoryList from "./components/category-list";
import ProductList from "./components/product-list";
import { Button } from "./components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { db } from "./lib/prisma";
import PromoBanner from "./components/promo-banner";
import RestaurantList from "./components/restaurant-list";
import Link from "next/link";

const Home = async() => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
        include: {
      restaurant: {
        select: {
          name: true,
        }
      }
      }
  });
  return ( 
    <>
      <Header />
      <div className="p-6 pt-0">
        <Search />
      </div>
      <div className="px-6">
        <CategoryList />
      </div>
      <div className="p-6">
       <PromoBanner 
          src="/promo-banner-01.png" 
          alt="promo banner"
       />
      </div>
      <div className="px-6 flex justify-between">
        <h2 className="font-semibold">Pedidos Recomendados</h2>
          <Button variant="ghost" className="text-[#EA1D2C] p-0" asChild>
            <Link href="/products/recommended">
               Ver todos
               <ChevronRightIcon size={16} />
            </Link>
          </Button>
      </div>
      <div className="">
        <ProductList products={products} />
      </div>
      <div className="p-6">
        <PromoBanner 
           src="/promo-banner-02.png" 
           alt="promo banner"
        />
      </div>
      <div className="px-6 flex justify-between">
        <h2 className="font-semibold">Restaurantes Recomendados</h2>
        <Link href="/restaurants/recommended">
          <Button variant="ghost" className="text-[#EA1D2C] p-0">
            Ver todos
            <ChevronRightIcon size={16} />
            </Button>
        </Link>
      </div>
      <div className="pb-10 max-w-[700px] space-y-3">
        <RestaurantList />
      </div>
    </>
   );
}
 
export default Home;