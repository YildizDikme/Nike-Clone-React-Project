import ProductDetailsCarouselCard from "@/components/ProductDetailsCarouselCard";
import RelatedProductsSlider from "@/components/RelatedProductsSlider";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";


const ProductDetails = () => {
  return (
    <div className="w-full md:p-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left-column */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarouselCard />
          </div>
          {/* left-column */}
          {/* right-column */}
          <div className="flex-[1] py-3">
            <div className="text-md text-red-700 font-semibold mb-2">
              Sustainable Materials
            </div>
            <div className="text-[34px] font-semibold mb-2">
              Jordan Retro 6 G
            </div>
            <div className="text-lg font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
            <div className="text-md font-semibold">$5.000.0</div>
            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <div>Select Number/Size</div>
                <div>Size/Size Guide</div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-gray-200 opacity-50">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-gray-200 opacity-50">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
              </div>
              <div className="text-red-600 mt-2 text-sm font-medium">
                Size Selection is Required
              </div>
              <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mt-5 mb-3 hover:opacity-75">
                Add to Cart
              </button>
              <button className="border border-black w-full py-4 rounded-full bg-white text-black text-lg font-medium transition-transform active:scale-95 mt-2 mb-3 hover:opacity-75 flex justify-center items-center">
                Favorite <IoMdHeartEmpty size={20} />
              </button>
              <div className="mt-5 text-sm">
                <p>
                  Elevate your style with the Nike Court Legacy Lift. A platform
                  midsole lets you stand out in an easy-to-wear classic design.
                  Don't worry, we've kept the harmony you love.
                </p>
                <p>
                  Elevate your style with the Nike Court Legacy Lift. A platform
                  midsole lets you stand out in an easy-to-wear classic design.
                  Don't worry, we've kept the harmony you love.
                </p>
              </div>
            </div>
          </div>
          {/* right-column */}
        </div>
        <RelatedProductsSlider /> 
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
