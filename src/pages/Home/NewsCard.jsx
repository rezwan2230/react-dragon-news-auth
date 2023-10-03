import { BsBookmarkHeart, BsFillShareFill, BsEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";


const NewsCard = ({ singleNews }) => {
    const { _id, others_info, category_id, rating, total_view, title, author, thumbnail_url, image_url, details } = singleNews
    return (
        <div className="bg-base-100 border rounded-t-md rounded-b-md pb-5">

            <div className="bg-[#F3F3F3] flex items-center justify-between p-4 ">
                <div className="flex items-center gap-4 ">
                    <img className="h-[40px] w-[40px] rounded-full" src={author.img} alt="" />
                    <div>
                        <p className="font-semibold text-[#403F3F]">{author.name}</p>
                        <p className="text-[#706F6F]">{author.published_date}</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div><BsBookmarkHeart className="text-2xl"></BsBookmarkHeart></div>
                    <div><BsFillShareFill className="text-2xl"></BsFillShareFill></div>
                </div>
            </div>

            <div className="px-4 mt-4">
                <h2 className="text-xl font-bold text-[#403F3F] mb-5 leading-8">{title}</h2>
                <figure>
                    <img className="w-full" src={image_url} alt="" />
                </figure>
                <div className="mt-7">
                    {
                        details.length > 200 ? <p className="leading-8">{details.slice(0, 200)} <span className="block"><Link to={`/news/${_id}`} className="text-xl font-semibold text-[#FF8C47]">Read More. . .</Link></span> </p>
                            : <p>{details}</p>
                    }
                    <div className="my-5">
                        <hr />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="rating rating-md">
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <div>
                            <p className="text-xl">{rating.number}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <BsEyeFill className="text-xl"></BsEyeFill>
                            <p>{total_view}</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;