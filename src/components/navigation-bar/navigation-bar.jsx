import styles from "./navigation-bar.module.css";

import { useNavigate } from "react-router-dom";

import RandomIcon from "../../icons/random-icon.svg";
import ShopIcon from "../../icons/shop-icon.svg";
import CartIcon from "../../icons/cart-icon.svg";

function NavigationBar({cart}) {
    function getNumOfCartItems() {
        let total = 0;
        
        for (const item of cart) total += item[1];

        if (total === 0) return "";

        return `(${total})`
    }

    const navigate = useNavigate();
    
    function navigateToHome() {
        navigate("/");
    }
    
    function navigateToShop() {
        navigate("/shop");
    }

    function navigateToCart() {
        navigate("/cart");
    }
    
    return <nav className={styles.nav}>

        <button className={styles.title} onClick={navigateToHome}>
            <img src={RandomIcon}/>
            <h1>Random Store</h1>
        </button>

        <button className={styles.button} onClick={navigateToShop}>
            <img src={ShopIcon} className={styles.icon}/>
            <p className={styles.name}>Shop</p>
        </button>
        <button className={styles.button} onClick={navigateToCart}>
            <img src={CartIcon} className={styles.icon}/>
            <p className={styles.name}>Cart {getNumOfCartItems()}</p>
        </button>
    </nav>;
}

export default NavigationBar;