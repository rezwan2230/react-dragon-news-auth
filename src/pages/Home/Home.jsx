import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">

                <div className=""><LeftSideNav></LeftSideNav></div>

                <div className="md:col-span-2 ">
                    <h2 className="text-2xl text-[#403F3F] font-semibold">Dragon News Home</h2>
                    <div className="mt-5 grid gap-7 mb-10">
                        {
                            news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                        }
                    </div>
                </div>

                <div className=""><RightSideNav></RightSideNav></div>

            </div>

        </div>
    );
};

export default Home;

// border border-black