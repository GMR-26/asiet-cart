
// components/ProductCard.tsx
import Image from 'next/image';

interface ProductCardProps {
  name: string;
  price: number;
  stock_quantity: number;
  image_url: string;
  description?: string;
}

const ProductCard = ({
  name,
  price,
  stock_quantity,
  image_url,
  description,
}: ProductCardProps) => {
  const isOutOfStock = stock_quantity === 0;

  return (
    <div className="rounded-xl bg-slate-800 shadow-lg p-4 flex flex-col items-center justify-between h-[350px] w-[250px] text-white">
      <div className="relative w-full h-[150px] mb-4">
        <Image
          src={image_url}
          alt={name}
          fill
          className="rounded-md object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold text-center">{name}</h3>
      <p className="text-sm text-center text-slate-400">{description}</p>

      <div className="flex items-center justify-between w-full mt-2">
        <span className="text-lg font-bold">₹{price}</span>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            isOutOfStock
              ? 'bg-red-600 text-white'
              : 'bg-green-600 text-white'
          }`}
        >
          {isOutOfStock ? 'Out of Stock' : 'In Stock'}
        </span>
      </div>

      <button
        disabled={isOutOfStock}
        className="mt-4 w-full py-2 rounded-md bg-blue-600 hover:bg-blue-500 disabled:bg-slate-500 disabled:cursor-not-allowed"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

