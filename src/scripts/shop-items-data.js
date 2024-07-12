import { useState, useEffect } from "react";

async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products;
}
function useGetProducts() {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getProducts()
        .then(prod => {
            setProducts(prod);
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setError(error);
            setLoading(false);
        });
    }, []);

    return { products, loading, error };
}
export default useGetProducts;