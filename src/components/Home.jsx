import { Outlet } from "react-router-dom";
import Nav from "./Nav";


const Home = () => {
    return (
        <div className="w-[95%] lg:w-[70%] m-auto">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;