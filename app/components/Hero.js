"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">
              🚀 Nouvelle collection disponible
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Découvrez nos
              <span className="text-cyan-400"> produits </span>
              préférés
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-8">
              Explorez une sélection de produits de qualité à des prix
              compétitifs. Une expérience d'achat simple, rapide et moderne.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="px-6 py-3 bg-cyan-500 text-white rounded-xl font-semibold hover:bg-cyan-600 transition duration-300 shadow-lg"
              >
                Voir les produits
              </Link>

              <button className="px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition duration-300">
                En savoir plus
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"
              alt="Hero"
              className="rounded-3xl shadow-2xl w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}