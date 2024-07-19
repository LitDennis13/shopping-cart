import { useOutletContext } from "react-router-dom";

function CartPage() {
    const products = useOutletContext()[0];
    
    return <div>
        <h1>Cart Page</h1>
    </div>;
}

export default CartPage;