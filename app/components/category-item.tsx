import { Category } from "@prisma/client";
import Image from "next/image";
interface CategoryProps{
    category: Category
}
const CategoryItem = ({category}: CategoryProps) => {

    return ( 
        <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-full shadow-md min-w-[160px]">
            <Image 
            src={category.imageUrl} 
            alt={category.name}
            height={30}
            width={30}
             />
             <p className="font-semibold text-sm">{category.name}</p>
        </div>
     );
}
 
export default CategoryItem;