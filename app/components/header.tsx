import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
const Header = () => {
    return ( 
        <div className="flex justify-between p-6">
            <Image src="/logo.png" width={100} height={30} alt="logo" />
            <Button size="icon"
             variant="outline" 
             className="bg-transparent border-none"
            >
                <MenuIcon />
            </Button>
        </div>
     );
}
 
export default Header;