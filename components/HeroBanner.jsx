import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const HeroBanner = ({
  heroBanner: {
    largeText1,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="hero-banner-container">
      <div className="hero-banner-text">
        <p>{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <Link href={`/product/${product}`}>
          <button type="button">{buttonText}</button>
        </Link>
      </div>

      <div className="hero-banner-image-container">
        <img
          src={urlFor(image)}
          alt={product.replace(/-/g, " ")}
          className="hero-banner-image"
        />
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default HeroBanner;
