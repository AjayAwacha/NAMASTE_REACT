import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filterResto, setfilterResto] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
       fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabl');
        const jsonData = await data.json();
        const dataFromApi = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        setRestaurants(dataFromApi);
        setfilterResto(dataFromApi);
    }

    return restaurants.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className='search-container'>
                <div className="search">
                    <input type="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        const filteredResto = restaurants.filter((resto) => {
                            debugger
                            return resto.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })
                        console.log('filteredResto ', filteredResto);
                        setfilterResto(filteredResto);
                    }}>Search</button>
                </div>
                <button onClick={() => {
                    const filterList = restaurants.filter((resto) => resto.info.avgRating > 4);
                    setfilterResto(filterList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='rest-container'>
                {
                    filterResto.map((restoData) => (
                        <Restaurant key={restoData.info.id} restoInfo={restoData} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
