/* eslint-disable react/jsx-key */
import { db } from "../lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
    const categories = await db.category.findMany({})
    //pegar as categorias do banco de dados
    //renderizar um item para cada categoria
    return ( 
        <div className="grid grid-cols-2 gap-2">
         {categories.map(category => (
             <CategoryItem key={category.id} category={category} />
         ))}
        </div>
     );
}
 
export default CategoryList;