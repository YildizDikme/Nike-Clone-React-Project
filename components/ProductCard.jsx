import Link from "next/link";
import React from "react";

const ProductCard = ({ href, imageSrc, altText, productName, price, originalPrice }) => {
  return (
    <Link href={href} className="transform overflow-hidden bg-white duration-300 hover:scale-105">
      <div className="m-4">
        <img className="w-full h-[250px] object-cover" src={imageSrc} alt={altText} />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">{productName}</h2>
          <div className="flex justify-between items-center text-black/[0.5]">
            <p className="mr-2 text-md font-semibold">{price}</p>
            <p className="text-sm font-medium line-through">{originalPrice}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};



export default ProductCard;
