import { useQuery } from "@tanstack/react-query"
import { productActions } from "..";

interface Options {
  id: number;
}


export const useProduct = ({ id }: Options) => {
  
  const { isLoading, isError, error, data: product, isFetching  } = useQuery(
    ['product', id ],
    () => productActions.getProductById(id),
    {
      staleTime: 1000 * 60 * 60,   
    }
  );


  return {
    error,
    isError,
    isFetching,
    isLoading,
    product,
  }
}