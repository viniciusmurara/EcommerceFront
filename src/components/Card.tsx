import * as React from 'react';

interface CardProps {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
  image: string;
}

export default async function Card() {
  const products = await fetch('http://localhost:8081/products', {
    cache: 'force-cache',
    next: {
      revalidate: 60,
    },
  });
  const data = await products.json();

  // Define a URL base do servidor para as imagens
  const imageBaseUrl = 'http://localhost:8081/uploads/';

  return (
    <div className="flex justify-center gap-24 py-20 flex-wrap cursor-pointer">
      {data.map((product: CardProps) => (
        <div
          key={product.id}
          className="flex flex-col w-[320px] h-[520px] bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <img
            src={`${imageBaseUrl}${product.image}`} // Concatena a URL base com o nome da imagem
            alt={product.name}
            className="h-[350px] w-full"
          />
          <div className="flex flex-col justify-between flex-1 p-4">
            <div>
              <h1 className="text-lg font-semibold text-gray-800">{product.name}</h1>
              <h2 className="text-sm text-gray-500">{product.type}</h2>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
            </div>
            <div className="mt-4">
              <p className="text-lg font-bold text-gray-900">R$ {product.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
