const brands = [
    {
        image: "/img/brands/plumrose.jpeg",
        alt: "Plumrose",
    },
        {
        image: "/img/brands/alimentos-polar.png",
        alt: "Alimentos Polar",
    }
]



export const Brands = () => {
    return (
        <div className="flex flex-col items-center gap-3 pt-16 pb-12">
            <h2 className="font-bold text-2xl">
                Marcas que disponemos
            </h2>

            <p className="w-2/3 text-center text-sm md:text-base">
            Tenemos los productos de mayor calidad</p>

<div className="grid grid-cols-3 gap-6 mt-8 items-center md:grid-cols-6">
    {
        brands.map((brand, index) => (
            <div key={index}>
                <img
            src={brand.image}
            alt={brand.alt}
            className="w-20 h-20 object-contain"
            />
            </div>
        ))
    }
</div>

        </div>
    );
};