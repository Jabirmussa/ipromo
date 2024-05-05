/* eslint-disable react/jsx-key */
import { db } from "../lib/prisma";
import RestaurantItem from "./restaurant-item";

const RestaurantList = async () => {
  // TODO: pegar restaurantes com maior número de pedidos
  const restaurants = await db.restaurant.findMany({ take: 10 });
  return (
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {restaurants.map((restaurant) => (
        <div className="min-w-[266px] max-w-[266px] space-y-3">
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
