import { Icon } from "@iconify-icon/react/dist/iconify.js";
import clsx from "clsx";
import React from "react";

export const ProductCard = ({ product, navigate }) => {
  return (
    <div
      className="rounded relative transition w-full cursor-pointer "
      onClick={() => navigate(`/products/1/1`)}
    >
      <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
        <Icon icon="mdi:heart-outline" width={20} className="text-black cursor-pointer" />
      </button>
      <button className="absolute top-8 right-2 text-gray-400 hover:text-red-500">
        <Icon
          icon="heroicons:eye-16-solid"
          width={20}
          className="text-xl text-black cursor-pointer"
        />
      </button>

      <img
        src={product.image}
        alt={product.name}
        className="w-full object-contain"
      />

      <h3 className="text-sm font-medium mt-3">{product.name}</h3>

      <div className="flex items-center space-x-1 text-yellow-400 text-sm mt-1">
        {"★".repeat(product.rating)}
        {"☆".repeat(5 - product.rating)}
        <span className="text-gray-600 ml-1 text-xs">({product.reviews})</span>
      </div>

      <div className="mt-2">
        <span className="text-red-600 font-semibold text-sm">
          ₹{product.price}
        </span>
        <span className="text-gray-400 line-through text-sm ml-2">
          ₹{product.originalPrice}
        </span>
      </div>
    </div>
  );
};
