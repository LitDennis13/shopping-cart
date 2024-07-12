import { useOutletContext } from "react-router-dom";

function CartPage() {
    const products = useOutletContext();

    return <div>
        <h1>Cart Page</h1>
    </div>;
}

export default CartPage;