import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
    return ( 
       <div className="flex gap-2">
        <Input placeholder="Buscar restaurante" className="bg-gray-200" />
        <Button size="icon" className="border-none bg-[#EA1D2C]">
            <SearchIcon size={20} />
        </Button>
       </div> 
     );
}
 
export default Search;