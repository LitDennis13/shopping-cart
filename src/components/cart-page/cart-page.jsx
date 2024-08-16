import { useOutletContext, Link, useNavigate } from "react-router-dom";

import styles from "./cart-page.module.css";


function CartPage() {
    const navigateToCart = useNavigate("/cart");
    const quantityOptions = [1,2,3,4,5,6,7,8,9,10];
    const products = useOutletContext()[2];
    const cart = useOutletContext()[3];

    let total = 0;
    for (const item of cart) total += (products[item[0]].price * item[1]);
    
    const totalNumOfItems = cart.reduce((accumulator, data) => accumulator + data[1], 0);

    function updateQuantity(value, productID) {
        for (const item of cart) {
            if (item[0] === productID - 1 ) {
                item[1] = +value;
                return navigateToCart();
            }
        }
    }

    function removeFromCart(spotInCart) {
        cart.splice(spotInCart, 1);
        return navigateToCart();
    }

    return <div className={styles.cartPage}>
        <div className={styles.cart}>
        {cart.map((data) => {
            const product = products[data[0]];
            let spotInCart = 0;
            for (let i = 0; i < cart.length; i++) {
                if (cart[i][0] === product.id - 1) {
                    spotInCart = i;
                    break;
                }
            }

            return <div key={product.id} className={styles.productCard} >
                    <Link to={`/shop/${product.id}`} className={styles.productImage}><img src={product.image} alt={product.title} /></Link>

                    <Link to={`/shop/${product.id}`} className={styles.productCardTitle}>{product.title}</Link>

                    <p className={styles.productCardPrice}>${product.price.toFixed(2)}</p>

                    <div className={styles.quantity}>
                        <label htmlFor={`quantityFor${product.id}`}><strong>Quantity</strong></label>

                        <select id={`quantityFor${product.id}`} value={cart[spotInCart][1]} onChange={(event) => updateQuantity(event.target.value, product.id)}>
                            {quantityOptions.map(((quantity) => {
                                return <option key={quantity} value={quantity}>{quantity}</option>
                            }))}
                        </select>
                    </div>
                    <button className={styles.removeButton} onClick={() => {removeFromCart(spotInCart)}}>Remove</button>
            </div>
        })}
        </div>
        
        <div className={styles.total}>
            
            <div className={styles.cartTotal}>
                <p>Subtotal ({totalNumOfItems} {totalNumOfItems > 1 ? "Items" : "Item"}): {`$${total.toFixed(2)}`}</p>
                <button>Proceed to Checkout</button>
            </div>

            <div className={styles.lineBreak}></div>

            <div className={styles.itemList}>
                {cart.map((data) => {
                    const product = products[data[0]];

                    const itemPriceTotal = (product.price * data[1]).toFixed(2);

                    let productDisplayTitle = product.title;
                    if (product.title.length > 30) {
                        productDisplayTitle = product.title.substring(0,30) + "...";
                    }
                    return <div key={data[0]} className={styles.itemListItem}>
                        <p className={styles.totalTitle}><strong>Product:</strong> {productDisplayTitle}</p>
                        <p className={styles.totalPrice} ><strong>Price:</strong> ${product.price}</p>
                        <p className={styles.totalQuantity} ><strong>Quantity:</strong> {data[1]}</p>
                        <p className={styles.totalTotalPrice} ><strong>${itemPriceTotal}</strong></p>
                    </div>;
                })}
            </div>
        </div>

    </div>;
}

export default CartPage;