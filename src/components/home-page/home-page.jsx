import RandomIcon from "../../icons/random-icon.svg";

import styles from "./home-page.module.css";
import shopStyles from "../shop-page/shop-page.module.css";

import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function getProductsToDisplay(products) {
    const screenWidth = window.innerWidth;

    let numberOfProductsToDisplay = Math.floor(screenWidth / 350);
    
    numberOfProductsToDisplay = numberOfProductsToDisplay > 0 ? numberOfProductsToDisplay : 1;
    return products.slice(0, numberOfProductsToDisplay);
}


function HomePage() {
    const fullProductList = useOutletContext()[1];

    let productsToDisplay = getProductsToDisplay(fullProductList);
    let [screenWidth, setScreenWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setScreenWidth(window.innerWidth);
    });
    
    useEffect(() => {
        productsToDisplay = getProductsToDisplay(fullProductList);

    }, [screenWidth]);

    return <div className={styles.homePage}>
        <p className={styles.desc}>A Store with the most random things 💀</p>
        <div className={styles.miniShopPage}>
        {productsToDisplay.map((product) => {
            let imageScaleClass = product.UseWidthClass ? shopStyles.productCardImgWidthScale : shopStyles.productCardImgHeightScale;

            return <div key={product.id} className={shopStyles.productCard}>
            <img src={product.image} alt={product.title} className={imageScaleClass}/>
            <p className={shopStyles.productCardTitle}>{product.title}</p>
            <p className={shopStyles.productCardPrice}>${product.price}</p>
            <p className={shopStyles.productCardRating}>{product.rating.rate} out of 5 Stars</p> 
            </div>
        })}
        </div>
    </div>;
}

export default HomePage;