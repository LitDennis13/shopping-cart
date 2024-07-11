import styles from "./navigation-bar.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HomeIcon from "../../icons/home-icon.svg";
import ShopIcon from "../../icons/shop-icon.svg";
import CartIcon from "../../icons/cart-icon.svg";

function NavigationBar() {
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
        <button className={styles.button} onClick={navigateToHome}>
            <img src={HomeIcon} className={styles.icon}/>
            <p className={styles.name}>Home</p>
        </button>
        <button className={styles.button} onClick={navigateToShop}>
            <img src={ShopIcon} className={styles.icon}/>
            <p className={styles.name}>Shop</p>
        </button>
        <button className={styles.button} onClick={navigateToCart}>
            <img src={CartIcon} className={styles.icon}/>
            <p className={styles.name}>Cart</p>
        </button>
    </nav>;
}

export default NavigationBar;