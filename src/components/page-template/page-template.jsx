import { Outlet } from "react-router-dom";

import NavigationBar from '../navigation-bar/navigation-bar';

function PageTemplate() {
    return <>
        <NavigationBar />
        <Outlet />
    </>;
}

export default PageTemplate;