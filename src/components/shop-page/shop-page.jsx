import { useOutletContext } from "react-router-dom";

import styles from "./shop-page.module.css";

function getImageScaleClass(image) {
    let imageScaleClass = styles.productCardImgWidthScale;
    const testImage = document.createElement("img");
    testImage.src = image;
    const testArea = document.querySelector("div");
    testArea.appendChild(testImage);
    if (testImage.clientHeight > testImage.clientWidth) imageScaleClass = styles.productCardImgHeightScale;
    testArea.removeChild(testImage);

    return imageScaleClass;
}

function ShopPage() {
    const products = useOutletContext();

    return <div className={styles.shopPage}>
        {products.map((product) => {
            let imageScaleClass = getImageScaleClass(product.image);
            console.log(imageScaleClass);


            return <div key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.title} className={imageScaleClass}/>
            <p className={styles.productCardTitle}>{product.title}</p>
            <p className={styles.productCardPrice}>${product.price}</p>
            <p className={styles.productCardRating}>{product.rating.rate} out of 5 Stars</p> 
            </div>
        })}
    </div>;
}

export default ShopPage;