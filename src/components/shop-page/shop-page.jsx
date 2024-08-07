import { useOutletContext, useNavigate } from "react-router-dom";

import styles from "./shop-page.module.css";

function ShopPage() {
    const products = useOutletContext()[0];

    const navigate = useNavigate();
    
    function navigateToProductPage(productID) {
        navigate(`/shop/${productID}`);
    }
    

    return <div className={styles.shopPage}>
        {products.map((product) => {

            return <button key={product.id} className={styles.productCard} onClick={() => navigateToProductPage(product.id)}>
            <img src={product.image} alt={product.title} />
            <p className={styles.productCardTitle}>{product.title}</p>
            <p className={styles.productCardPrice}>${product.price}</p>
            <p className={styles.productCardRating}>{product.rating.rate} out of 5 Stars</p>
            </button>
        })}
    </div>;
}

export default ShopPage;