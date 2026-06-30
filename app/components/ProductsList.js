import React from 'react'
import ProductCard from './ProductCard'

export default function ProductsList({products}) {
  return (
    <div  className="p-4">
    <h1 className="text-center text-3xl font-bold mb-8">Produits</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
    </div>
  )
}
