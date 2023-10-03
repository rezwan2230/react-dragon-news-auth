import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] py-2 px-4">
            <button className="btn btn-secondary  mr-4">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                {/* We can use link here */}
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;