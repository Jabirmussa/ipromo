import Image, { ImageProps } from "next/image";
// interface PromoBanner{

// }

const PromoBanner = (props: ImageProps) => {
    return ( 
        <div>
            <Image className="h-auto w-full object-contain" 
            width={0} 
            height={0} 
            sizes="100vw"
            quality={100}
            {...props}
            />
      </div>
     );
}
 
export default PromoBanner;