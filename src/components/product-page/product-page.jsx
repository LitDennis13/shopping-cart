import { useParams, useOutletContext, useNavigate } from "react-router-dom";
import { getProductArrayLocation } from "../../scripts/utility-functions";

import styles from "./product-page.module.css";

function ProductPage() {
    const urlParams = useParams();
    const productID = urlParams.id;
    const productList = useOutletContext()[0];
    const productDataLocation = getProductArrayLocation(productID, productList);
    const productData = productList[productDataLocation];
    const navigate = useNavigate();
    const addToCartFunc = useOutletContext()[4];
    let cart = useOutletContext()[3];
    
    function addItemToCart() {
        cart = addToCartFunc(productID - 1, cart);
        navigate("/cart");
    }
    
    const addToCartButton = <button className={styles.addToCart} onClick={addItemToCart}>Add to Cart</button>;
        

    return <div className={styles.outerPage}>
        <div className={styles.productPage}>
            <img src={productData.image} alt={productData.title} className={styles.productImage}/>
            <div className={styles.productInfo}>
                <h2 className={styles.productTitle}>{productData.title}</h2>
                
                <p className={styles.productRatingsNumber}><strong>{productData.rating.rate} out of 5 Stars</strong></p>
                <h1 className={styles.productPrice}>${productData.price}</h1>
                {addToCartButton}
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

export default ProductPage;


