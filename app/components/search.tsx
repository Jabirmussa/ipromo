"use client"
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
    const route = useRouter();
    const [search, setSearch] = useState("");

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value);
    };

    const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        
        if(!search){
            return;
        }

        route.push(`/restaurants?search=${search}`)
    };
        
    
    return ( 
       <form className="flex gap-2" onSubmit={handleSearchSubmit}>
        <Input placeholder="Buscar restaurante" className="bg-gray-200" 
            onChange={handleSearch}
            value={search}
        />
        <Button size="icon" className="border-none bg-[#EA1D2C]" type="submit">
            <SearchIcon size={20} />
        </Button>
       </form> 
     );
}
 
export default Search;