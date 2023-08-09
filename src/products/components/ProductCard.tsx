import { Card, Image } from "@nextui-org/react";
import { type Product } from "..";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
  fullDescription?: boolean;
  prefetchProduct?: (id: number) => void
}


export const ProductCard = ({ product, fullDescription = false, prefetchProduct }: Props) => {


  return (
    <Link to={`/product/${ product.id }`}
      onMouseEnter={() => prefetchProduct && prefetchProduct(product.id) }>

      <Card
        className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <Image src={product.image}
            alt="tailwind logo"
            width={300}
            height={400}
            className="rounded-xl p-5 sm:p-0 bg-white" />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
          <div className="flex justify-between item-center">
            <p className="text-gray-500 font-medium hidden md:block">{product.category}</p>
          </div>
          <h3 className="font-black text-gray-800 text-xl">{product.title}</h3>

          <p className="md:text-lg text-gray-500 text-base">
            {
              fullDescription 
                ? product.description
                : product.description.slice(0, 50) + '...'
            }
          </p>

          <p className="text-xl font-black text-gray-800">
            ${product.price}
            <span className="font-normal text-gray-600 text-base"> +impuesto</span>
          </p>
        </div>
      </Card>
    </Link>
  );
}
