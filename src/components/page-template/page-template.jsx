import { Outlet } from "react-router-dom";

import useGetProducts from "../../scripts/shop-items-data";

import NavigationBar from '../navigation-bar/navigation-bar';
import { shuffle } from "../../scripts/utility-functions";


function PageTemplate() {
    const { products, loading, error } = useGetProducts();
    let shuffledProducts1 = [];
    let shuffledProducts2 = [];
    if (products) {
        shuffledProducts1 = shuffle(products);
        shuffledProducts2 = shuffle(products);
    }

    // temp
    const fakeCart = [];
    // [productID, #product(s)]
    function addToCartFunction(productID,cart) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i][0] === productID) {
                if (cart[i][1] < 10) cart[i][1]++;
                return cart;
            }
        }
        cart.push([productID, 1]);
        return cart;
    }
    
    return <>
        <NavigationBar cart={fakeCart} />
        {products && <Outlet 
        addToCartFunc = {addToCartFunction}
        context={[shuffledProducts1, shuffledProducts2, products, fakeCart, addToCartFunction]} />}
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error!!! {'(check console for more detail)'}</h1>}
    </>;
}

export default PageTemplate;