import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="container mx-auto font-poppines">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;