import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
const Header = () => {
    return ( 
        <div className="flex justify-between p-6">
            <Link  href={'/'}>
                <Image src="/logo.png" width={100} height={30} alt="logo" />
            </Link>
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