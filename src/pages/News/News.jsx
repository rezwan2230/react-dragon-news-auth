import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 mt-14">

                <div className="col-span-3 border border-black">
                <h2 className="text-2xl text-[#403F3F] font-semibold pb-2">Dragon News</h2>
                <p>{id}</p>
                </div>

                <div className="border border-black">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;