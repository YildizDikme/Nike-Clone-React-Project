import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import React from "react";

const Category = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                Running Shoes
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard
            href="/product/1"
            imageSrc="/nike-1.webp"
            altText="Nike Product 1"
            productName="Product 1"
            price="$20.00"
            originalPrice="$25.00"
          />
          <ProductCard
            href="/product/1"
            imageSrc="/nike-2.jpeg"
            altText="Nike Product 1"
            productName="Product 1"
            price="$20.00"
            originalPrice="$25.00"
          />
          <ProductCard
            href="/product/1"
            imageSrc="/nike-3.webp"
            altText="Nike Product 1"
            productName="Product 2"
            price="$20.00"
            originalPrice="$25.00"
          />
          <ProductCard
            href="/product/1"
            imageSrc="/nike-4.webp"
            altText="Nike Product 1"
            productName="Product 3"
            price="$20.00"
            originalPrice="$25.00"
          />
          <ProductCard
            href="/product/1"
            imageSrc="/nike-5.webp"
            altText="Nike Product 1"
            productName="Product 4"
            price="$20.00"
            originalPrice="$25.00"
          />
          <ProductCard
            href="/product/1"
            imageSrc="/nike-6.webp"
            altText="Nike Product 1"
            productName="Product 5"
            price="$20.00"
            originalPrice="$25.00"
          />
          <ProductCard
            href="/product/1"
            imageSrc="/nike-7.webp"
            altText="Nike Product 1"
            productName="Product 6"
            price="$20.00"
            originalPrice="$25.00"
          />
          <ProductCard
            href="/product/1"
            imageSrc="/nike-8.webp"
            altText="Nike Product 1"
            productName="Product 7"
            price="$20.00"
            originalPrice="$25.00"
          />
          <ProductCard
            href="/product/1"
            imageSrc="/nike-9.webp"
            altText="Nike Product 1"
            productName="Product 8"
            price="$20.00"
            originalPrice="$25.00"
          />
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
