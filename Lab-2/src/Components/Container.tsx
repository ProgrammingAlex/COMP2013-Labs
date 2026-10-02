import LocationCard from "./Card";
import listings from "../data/data";

export default function LocationContainer()
{
    return(<div className="Container">
        <LocationCard{...listings[0]}/>
    </div>)
}