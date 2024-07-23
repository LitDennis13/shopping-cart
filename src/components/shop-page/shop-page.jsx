import { useOutletContext } from "react-router-dom";

import styles from "./shop-page.module.css";

function ShopPage() {
    const products = useOutletContext()[0];

    return <div className={styles.shopPage}>
        {products.map((product) => {
           let imageScaleClass = product.UseWidthClass ? styles.productCardImgWidthScale : styles.productCardImgHeightScale;

            return <button key={product.id} className={styles.productCard}>
            <img src={product.image} alt={product.title} className={imageScaleClass}/>
            <p className={styles.productCardTitle}>{product.title}</p>
            <p className={styles.productCardPrice}>${product.price}</p>
            <p className={styles.productCardRating}>{product.rating.rate} out of 5 Stars</p>
            </button>
        })}
    </div>;
}

export default ShopPage;