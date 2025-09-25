import { LuMinus, LuPlus } from "react-icons/lu";
import { Separator } from "../components/shared/Separator";
import { CiDeliveryTruck } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import { BsChatLeftText } from "react-icons/bs";
import { GridImages } from "../components/one-product/GridImages";
import { useProduct } from "../hooks/products/useProduct";
import { useEffect, useMemo, useState } from "react";
import type { VariantProduct } from "../interfaces";
import { useCounterStore } from "../store/counter.store";

interface Acc {
  [key: string]: {
    name: string;
    storages: string[];
  };
}

export const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const { product, isLoading, isError } = useProduct(slug || "");

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  

  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  const colors = useMemo(() => {
    if (!product?.variants) return {};

    return product.variants.reduce((acc: Acc, variant: VariantProduct) => {
      const { color, color_name, storage } = variant;
      if (!acc[color]) {
        acc[color] = {
          name: color_name,
          storages: [],
        };
      }

      if (!acc[color].storages.includes(storage)) {
        acc[color].storages.push(storage);
      }

      return acc;
    }, {} as Acc);
  }, [product?.variants]);

  const availableColors = Object.keys(colors);

  useEffect(() => {
    if (!selectedColor && availableColors.length > 0) {
      setSelectedColor(availableColors[0]);
    }
  }, [availableColors, selectedColor]);

  if (isLoading) {
    return <div>Cargando producto...</div>;
  }

  if (isError || !product) {
    return <div>Error al cargar el producto.</div>;
  }

  return (
    <>
      <div className="h-fit flex flex-col md:flex-row gap-16 mt-8">
        <GridImages images={product.images || []} />

        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-bold tracking-tight">{product.name || "Nombre del producto"}</h1>

          <div className="flex gap-5 items-center">
           

            
          </div>

          <Separator />

          <ul className="space-y-2 ml-7 my-10">
           
          </ul>

          <div className="flex flex-col gap-3">
            
            <div className="flex gap-3">
              <button
                className={`w-8 h-8 rounded-full flex justify-center items-center ${
                  selectedColor ? "border border-slate-800" : ""
                }`}
                style={{ backgroundColor: selectedColor || "transparent" }}
                onClick={() => selectedColor && setSelectedColor(selectedColor)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium">Opciones disponibles</p>
            <div className="flex gap-3">
              <select
                className="border border-gray-300 rounded-lg px-3 py-1"
                value={selectedStorage || ""}
                onChange={(e) => setSelectedStorage(e.target.value)}
              >
                <option value="">Seleccionar opción</option>
                {selectedColor &&
                  colors[selectedColor]?.storages.map((storage) => (
                    <option key={storage} value={storage}>
                      {storage}
                    </option>
                  ))}
              </select>
            </div>
          </div>

           (
            <button
              className="bg-[#f3f3f3] uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all duration-300 hover:bg-[#e2e2e2] w-full"
              disabled
            >
              AGOTADO
            </button>
          ) : (
            <>
              <div className="space-y-3">
                <p className="text-sm font-medium">Cantidad:</p>

                <div className="flex gap-8 px-5 py-3 border border-slate-200 w-fit rounded-full">
                  <button onClick={decrement} disabled={count <= 1}>
                    <LuMinus size={15} />
                  </button>
                  <span className="text-sm text-slate-500">{count}</span>
                  <button onClick={increment}>
                    <LuPlus size={15} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button className="bg-[#f3f3f3] uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all duration-300 hover:bg-[#e2e2e2]">
                  Agregar al carro
                </button>
                <button className="bg-black text-white uppercase font-semibold tracking-widest text-xs py-4 rounded-full">
                  Comprar ahora
                </button>
              </div>
            </>
          );

          <div className="flex pt-2">
            <div className="flex flex-col gap-1 flex-1 items-center">
              <CiDeliveryTruck size={35} />
              <p className="text-xs font-semibold">Envío gratis para compras mayores a 50$</p>
            </div>

            <Link to="#" className="flex flex-col gap-1 flex-1 items-center justify-center">
              <BsChatLeftText size={30} />
              <p className="flex flex-col items-center text-xs">
                <span className="font-semibold">¿Necesitas ayuda?</span> Contáctanos aquí
              </p>
            </Link>
          </div>
        </div>
      </div>

      
    </>
  );
};
