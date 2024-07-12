import { useOutletContext } from "react-router-dom";
import styles from "./shop-page.module.css";

function ShopPage() {
    const products = useOutletContext();

    return <div className={styles.shopPage}>
        <h1>Shop Page</h1>
    </div>;
}

export default ShopPage;