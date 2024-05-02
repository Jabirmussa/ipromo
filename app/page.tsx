import Image from "next/image";
import { Card } from "./components/ui/card";
import Header from "./components/header";
import Search from "./components/search";
import CategoryList from "./components/category-list";
import ProductList from "./components/product-list";
import { Button } from "./components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { db } from "./lib/prisma";

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
        <Image className="h-auto w-full object-contain" 
        src="/promo-banner-01.png" 
        alt="promo banner"
         width={0} 
         height={0} 
         sizes="100vw"
         quality={100}
         />
      </div>
      <div className="px-6 flex justify-between">
        <h2 className="font-semibold">Pedidos Recomendados</h2>
        <Button variant="ghost" className="text-[#EA1D2C] p-0">
          Ver todos
          <ChevronRightIcon size={16} />
          </Button>
      </div>
      <ProductList products={products} />
    </>
   );
}
 
export default Home;