"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  imagesUrls: string[];
  name: string;
}

const ProductImages = ({ imagesUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imagesUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col lg:min-h-full lg:w-3/5">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent lg:h-full lg:rounded-lg">
        <Image
          src={currentImage}
          priority
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5 lg:px-0">
        {imagesUrls.map((imagesUrl) => (
          <button
            key={imagesUrl}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent ${
              imagesUrl == currentImage &&
              "border-2 border-solid border-primary"
            }`}
            onClick={() => handleImageClick(imagesUrl)}
          >
            <Image
              src={imagesUrl}
              alt={name}
              height={0}
              priority
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
