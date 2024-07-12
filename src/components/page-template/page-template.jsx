import { useState, useEffect } from "react";

import { Outlet } from "react-router-dom";

import getProducts from "../../scripts/shop-items-data";

import NavigationBar from '../navigation-bar/navigation-bar';

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

function PageTemplate() {
    const { products, loading, error } = useGetProducts();

    return <>
        <NavigationBar />
        {products && <Outlet context={products} />}
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error!!! {'(check console for more detail)'}</h1>}
    </>;
}

export default PageTemplate;