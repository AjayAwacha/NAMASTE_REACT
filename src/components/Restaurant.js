import { CDN_LINK } from "../utils/constants";

const Restaurant = (props) => {
    const { restoInfo } = props;
    const {avgRating, name, cuisines, sla, cloudinaryImageId} = restoInfo.info || {};

    return (
        <div className='rest-card'>
            <img style={{width: '100%', height: '140px'}} src={CDN_LINK + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines?.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.deliveryTime} minuts</h4>
        </div>
    )
}

export default Restaurant;