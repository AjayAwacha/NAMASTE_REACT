import Restaurant from "./Restaurant";
import restoList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restaurants, setRestaurants] = useState(restoList);

    return (
        <div className='body'>
            <div className='search-container'>
                <button onClick={() => {
                    const filterList = restoList.filter((resto) => resto.info.avgRating > 4);
                    setRestaurants(filterList);
                }}>To Rated Restaurants</button>
            </div>
            <div className='rest-container'>
                {
                    restaurants.map((restoData) => (
                        <Restaurant key={restoData.info.id} restoInfo={restoData} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;