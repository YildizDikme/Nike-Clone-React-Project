import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";

const RelatedProductsSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="mt-[50px] md:mt-[100px] mb-[100px] md:mb-0">
      <div className="text-2xl font-bold mb-5">You Might Also Like</div>
      <Carousel responsive={responsive}>
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
      </Carousel>
      ;
    </div>
  );
};

export default RelatedProductsSlider;
