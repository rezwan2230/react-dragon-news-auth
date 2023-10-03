import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="">
            <h2 className="text-2xl text-[#403F3F] font-semibold">All Category</h2>
            <div className=" bg-[#E7E7E7] text-center text-xl text-[#403F3F] font-semibold mt-5 py-5 rounded-md">
                <h2>National News</h2>
            </div>
            <div>
                {
                    categories.map(category=>
                    <NavLink 
                    className="block ml-10 mt-5 text-[#9F9F9F] text-xl"
                    key={category.id}
                    to={`category/${category.id}`}>
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;