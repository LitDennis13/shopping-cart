import styles from "./error-page.module.css";

function ErrorPage() {
    return <div className={styles.errorPage}>
        <h1>Error Page</h1>
        <p>Either this page does not exist or there is an error (check console for more detail)</p>
    </div>;
}

export default ErrorPage;