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
        <p>{location}</p>
        <p>`{rating} ★`</p>
        <p>`{price}/night`</p>
    </div>
}