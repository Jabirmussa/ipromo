import Header from "@/app/components/header";
import RestaurantItem from "@/app/components/restaurant-item";
import { db } from "@/app/lib/prisma";

const RecommendedRestaurants = async () => {
  const restaurants = await db.restaurant.findMany({});

  return (
    <>
      <Header />
      <div className="px-5 py-6">
        <h2 className="mb-6 text-lg font-semibold">
          Restaurantes Recomendados
        </h2>
        <div className="flex w-full flex-col gap-6">
          {restaurants.map((restaurant) => (
            // eslint-disable-next-line react/jsx-key
            <div className="min-w-full max-w-full">
              <RestaurantItem
                key={restaurant.id}
                restaurant={restaurant}
                className="min-w-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommendedRestaurants;
