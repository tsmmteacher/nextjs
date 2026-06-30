"use client";
import DetailsProduct from "@/app/components/DetailsProduct";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function ProductDetails({ params }) {
  const { id } = useParams(); // Récupère l'ID du produit depuis l'URL
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des détails du produit.");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]);
  if (!product) {
    return <p>Chargement des détails du produit...</p>;
  }
  return (
   <DetailsProduct product={product} />
  );
}
