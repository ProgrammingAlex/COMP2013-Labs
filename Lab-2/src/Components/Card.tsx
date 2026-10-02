import type {ResortListing} from "../data/data";

export default function LocationCard({
    pic,
    country,
    location,
    rating,
    price,
}: ResortListing){
    return <div className="LocationCard">
        <img src={pic} alt="" width="100px" />
        <h2>{country}</h2>
        <p className="locationName">{location}</p>
        <p style={{color:rating < 4 ? "red" : "green"}}>{rating} ★</p>
        <p className="price">{price}/night</p>
    </div>
}