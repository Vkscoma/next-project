import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMarker,
} from "react-icons/fa";

interface Property {
  type: string;
  name: string;
  beds: number;
  baths: number;
  square_feet: number;
  location: {
    state: string;
    city: string;
  };
  _id: string;
}

const PropertyCard = ({ property }: { property: Property }) => {
  return (
    <div className="card bg-base-100 md:w-96 w-full shadow-xl">
      <figure>
        <Image src="" alt="Property Image" />
      </figure>
      <div className="card-body">
        <h2 className="text-slate-400 text-lg">{property.type}</h2>
        <h2 className="card-title mb-4">{property.name}</h2>

        <div className="flex justify-center text-gray-500 mb-4">
          <p className="flex items-center gap-2">
            <FaBed /> {property.beds} {""}
            {property.beds > 1 ? "Beds" : "Bed"}
          </p>
          <p className="flex items-center gap-2">
            <FaBath /> {property.baths} {""}
            {property.baths > 1 ? "Baths" : "Bath"}
          </p>
          <p className="flex items-center gap-2">
            <FaRulerCombined /> {property.square_feet} {""}
            <span>Sqft.</span>
          </p>
        </div>

        <div className="card-actions justify-between">
          <p>
            <FaMarker />
            <span className="text-primary font-semibold">
              {property.location.state}
              {","} {property.location.city}
            </span>
          </p>
          <Link
            href={`/properties/${property._id}`}
            className="btn text-light bg-third hover:bg-indigo-600"
          >
            View Property
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
