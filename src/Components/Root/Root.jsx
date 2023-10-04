import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <h1>Hello From Root</h1>
        </div>
    );
};

export default Root;