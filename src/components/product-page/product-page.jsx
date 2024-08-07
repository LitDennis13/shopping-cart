import { useParams, useOutletContext } from "react-router-dom";
import { getProductArrayLocation } from "../../scripts/utility-functions";

import styles from "./product-page.module.css";

function ProductPage() {
    const urlParams = useParams();
    const productID = urlParams.id;

    const productList = useOutletContext()[0];
    
    const productDataLocation = getProductArrayLocation(productID, productList);
    const productData = productList[productDataLocation];
    if (productData.UseWidthClass) {
        return <div className={styles.outerPage}>
            <div className={styles.productPage}>
                <img src={productData.image} alt={productData.title} className={styles.productImage}/>
                <div className={styles.productInfo}>
                    <h2 className={styles.productTitle}>{productData.title}</h2>
                    
                    <p className={styles.productRatingsNumber}><strong>{productData.rating.rate} out of 5 Stars</strong></p>
                    <h1 className={styles.productPrice}>${productData.price}</h1>
                    
                    <button className={styles.addToCart}>Add to Cart</button>
                    
                </div>
                <div className={styles.productOtherInfo}>
                    <h3 className={styles.aboutProduct}>About This Item</h3>
                    <p className={styles.productDesc}><strong>Description:</strong> {productData.description}</p>
                    <p className={styles.productCategory}><strong>Category:</strong> {productData.category.charAt(0).toUpperCase() + productData.category.slice(1)}</p>
                    <p className={styles.productRatingCount}><strong>{productData.rating.count} Ratings</strong></p>
                </div>
            </div>
        </div>
    }
    
    else {
        return <div className={styles.outerPage}>
        <div className={styles.productPage}>
            <img src={productData.image} alt={productData.title} className={styles.productImage}/>
            <div className={styles.productInfo}>
                <h2 className={styles.productTitle}>{productData.title}</h2>
                
                <p className={styles.productRatingsNumber}><strong>{productData.rating.rate} out of 5 Stars</strong></p>
                <h1 className={styles.productPrice}>${productData.price}</h1>
                
                <button className={styles.addToCart}>Add to Cart</button>
                
            </div>
            <div className={styles.productOtherInfo}>
                <h3 className={styles.aboutProduct}>About This Item</h3>
                <p className={styles.productDesc}><strong>Description:</strong> {productData.description}</p>
                <p className={styles.productCategory}><strong>Category:</strong> {productData.category.charAt(0).toUpperCase() + productData.category.slice(1)}</p>
                <p className={styles.productRatingCount}><strong>{productData.rating.count} Ratings</strong></p>
            </div>
        </div>
    </div>
    }
    

}

export default ProductPage;


