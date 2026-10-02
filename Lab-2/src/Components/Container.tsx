import LocationCard from "./Card";
import listings from "../data/data";

export default function LocationContainer()
{
    return(<div className="Container">
   {listings.map((resort) => (
        <LocationCard key={resort.id} {...resort} />
      ))}
    </div>
  );
}