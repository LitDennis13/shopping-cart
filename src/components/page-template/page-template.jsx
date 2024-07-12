import { Outlet } from "react-router-dom";

import useGetProducts from "../../scripts/shop-items-data";

import NavigationBar from '../navigation-bar/navigation-bar';

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