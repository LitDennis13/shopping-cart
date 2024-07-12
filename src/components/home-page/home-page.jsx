import { useOutletContext } from "react-router-dom";

function HomePage() {
    const products = useOutletContext();

    return <div>
        <h1>Home Page</h1>
    </div>;
}

export default HomePage;