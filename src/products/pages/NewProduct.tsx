import { Button, Image, Input, Textarea } from "@nextui-org/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useProductMutation } from "..";

interface FormInputs {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}


export const NewProduct = () => {

  const productMutation = useProductMutation();
  // const productMutation = useMutation({
  //   mutationFn: productActions.createProduct,
  //   onSuccess: () => {
  //     console.log('Producto creado');
  //   }
  // });

  const { control, handleSubmit, watch } = useForm<FormInputs>({
    defaultValues: {
      title: "Teclado",
      price: 150.22,
      description: "Fugiat culpa esse eiusmod sint ullamco pariatur voluptate dolor ea sint duis fugiat veniam. Mollit ut nisi nulla sunt duis nulla irure magna cupidatat. Ex aliqua occaecat ipsum magna ipsum quis magna in. Nostrud magna proident veniam occaecat Lorem mollit irure amet sit. Tempor dolore elit culpa tempor occaecat culpa eu incididunt non. Ipsum consequat do sit ipsum proident est velit nisi eu occaecat laborum fugiat dolore. Mollit commodo ea cupidatat consequat cillum amet veniam consequat.",
      category: "men's clothing",
      image: "https://www.officedepot.com.gt/medias/38615.jpg-1200ftw?context=bWFzdGVyfHJvb3R8Mzg4MzA1fGltYWdlL2pwZWd8aDI5L2g1ZS8xMDEzNTM0MzIwMjMzNC8zODYxNS5qcGdfMTIwMGZ0d3w3ZDE3ZGI0NGZlYjhlMDk4NDJjZjdjZjNhZWFlMDA4ODE1MDA2ZTMxZjAwODVjZmZjODBlYzBlNDBmMGUwM2Ix"
    }
  });

  const newImage = watch('image');
  

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    productMutation.mutate(data);
  }


  return (
    <div className="w-full flex-col">
      <h1 className="text-2xl font-bold">Nuevo producto</h1>

      <form className="w-full" onSubmit={handleSubmit(onSubmit)} >

        <div className="flex justify-around items-center">

          <div className="flex-col w-[500px]">

            <Controller
              control={control}
              name="title"
              rules={{ required: true }}
              render={({ field }) => (
                <Input value={field.value} onChange={field.onChange} className="mt-2" type="text" label="Titulo del producto" />
              )}
            />

            <Controller
              control={control}
              name="price"
              rules={{ required: true }}
              render={({ field }) => (
                <Input value={field.value.toString()} onChange={ ev => field.onChange( +ev.target.value )} className="mt-2" type="number" label="Precio" />
                )}
            />

            <Controller
              control={control}
              name="image"
              rules={{ required: true }}
              render={({ field }) => (
                <Input value={field.value} onChange={field.onChange} className="mt-2" type="url" label="Url de la imagen del producto" />
              )}
            />

            <Controller
              control={control}
              name="description"
              rules={{ required: true }}
              render={({ field }) => (
                <Textarea value={field.value} onChange={field.onChange} className="mt-2" label="Descripcion del producto" />
              )}
            />

            <Controller
              control={control}
              name="category"
              rules={{ required: true }}
              render={({ field }) => (
                <select value={field.value} onChange={field.onChange} className="rounded-md p-3 mt-2 bg-gray-800 w-full">
                  <option value="men's clothing">Men's clothing</option>
                  <option value="women's clothing">Women's clothing</option>
                  <option value="jewelery">Jewelery</option>
                  <option value="electronics">Electronics</option>
                </select>
              )}
            />




            <br />
            <Button 
              type="submit" 
              className="mt-2" 
              isDisabled={ productMutation.isLoading }
              color="primary">
                { productMutation.isLoading ? 'Cargando...' : 'Crear producto' }
              </Button>
          </div>

          <div className="bg-white rounded-2xl p-10 flex items-center" style={{
            width: '500px',
            height: '600px',
          }}>

            <Image
              src={ newImage }
            />
          </div>

        </div>


      </form>

    </div>
  )
}