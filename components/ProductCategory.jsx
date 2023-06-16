import React from "react";
import Wrapper from "./Wrapper";

const ProductCategory = () => {
  return (
    <Wrapper>
      <div className="text-center max-w-[800px] mx-auto my-[20px] md:my-[30px]">
        <h2 className="text-3xl md:text-4xl mb-5 font-extrabold leading-tight text-center">
          Collection of Free Spirits
        </h2>
        <p>Department of Nike Archives Continuing to Challenge Tradition</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 p-0 mb-5 cursor-pointer">
        <div>
          <img className="h-full w-full object-cover" src="/hand.webp" alt="" />
        </div>
        <div>
          <div>
            <img
              className="w-full h-[350px] object-cover"
              src="/nike-3.jpeg"
              alt=""
            />
          </div>
          <div>
            <img className="w-full h-[350px]" src="/nike-logo.jpeg" alt="" />
          </div>
        </div>
        <div>
          <div>
            <img
              className="w-full h-[350px] object-cover"
              src="/nike-blue.webp"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-[350px] object-cover"
              src="/nike-lips.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductCategory;
