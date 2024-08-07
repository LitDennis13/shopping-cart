import { Outlet } from "react-router-dom";

import useGetProducts from "../../scripts/shop-items-data";

import NavigationBar from '../navigation-bar/navigation-bar';
import { shuffle } from "../../scripts/utility-functions";

function setProductImageCssClass(products) {
    let newProductList = [...products];
    let index = 0;
    
    for (let product of newProductList) {
        let useWidthClass = true;
        const testImage = document.createElement("img");
        testImage.src = product.image;
        const testArea = document.querySelector("div");
        testArea.appendChild(testImage);
        if (testImage.clientHeight > testImage.clientWidth) useWidthClass = false;
        testArea.removeChild(testImage);
        newProductList[index] = {...product, UseWidthClass: useWidthClass};
        index++;
    }

    return newProductList;
}


function PageTemplate() {
    const { products, loading, error } = useGetProducts();
    let updatedProducts = [];
    let shuffledProducts1 = [];
    let shuffledProducts2 = [];
    if (products) {
        updatedProducts = setProductImageCssClass(products);
        shuffledProducts1 = shuffle(updatedProducts);
        shuffledProducts2 = shuffle(updatedProducts);
    }

    return <>
        <NavigationBar />
        {products && <Outlet context={[shuffledProducts1, shuffledProducts2]} />}
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error!!! {'(check console for more detail)'}</h1>}
    </>;
}

export default PageTemplate;