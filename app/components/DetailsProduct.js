import { useRouter } from "next/navigation";
import React from "react";

export default function DetailsProduct({ product }) {
    const router = useRouter();
  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover mb-4"
      />
      <p className="text-lg font-semibold text-gray-700">${product.price}</p>
      <p className="text-gray-500 mt-4">{product.description}</p>
       <button
        onClick={() => router.push(`/products/`)}
        className="block mt-auto mx-auto bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
      >
        🔙Retour à la liste des produits
      </button>
    </div>
  );
}
