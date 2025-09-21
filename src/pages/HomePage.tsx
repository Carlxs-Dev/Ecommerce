import { Brands } from "../components/home/Brands";
import { FeatureGrid } from "../components/home/FeatureGrid";
import { ProductGrid } from "../components/home/ProductGrid";
import { ProductGridSkeleton } from "../components/skeletons/ProductGridSkeletons";
import { prepareProducts } from "../helpers";
import { useHomeProducts } from "../hooks";

export const HomePage = () => {

const { recentProducts, popularProducts, isLoading } = useHomeProducts();

const preparedRecentProducts = prepareProducts(recentProducts);
const preparedPopularProducts = prepareProducts(popularProducts);


console.log(preparedRecentProducts);


    return (
    <div>
        <FeatureGrid />


    {isLoading ? (
            <ProductGridSkeleton numberOfProducts={4}/>
    ) : (
                <ProductGrid
                    title="Nuevos productos"
                    products={preparedRecentProducts}
        />
    )}

    {isLoading ? (
            <ProductGridSkeleton numberOfProducts={4}/>
    ) : (
                <ProductGrid
                    title="Productos destacados"
                    products={preparedPopularProducts}
        />
    )}


<Brands />
        
    </div>
    );
};
