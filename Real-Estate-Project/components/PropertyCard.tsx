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
  rates: {
    monthly: number;
    weekly: number;
    nightly: number;
  };
  location: {
    state: string;
    city: string;
    street: string;
    zipcode: string;
  };
  _id: string;
  images: string[];
}

const PropertyCard = ({ property }: { property: Property }) => {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `$${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `$${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `$${rates.nightly.toLocaleString()}/nt`;
    }
  };
  return (
    <div className="card bg-base-100 md:w-96 w-full shadow-xl">
      <figure>
        <Image
          src={`/properties/${property.images[0]}`}
          alt="Property Image"
          width={0}
          height={0}
          layout="responsive"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-slate-400 text-lg">{property.type}</h2>
        <h2 className="card-title mb-4">{property.name}</h2>
        <h3 className="absolute top-[10px] right-[10px] bg-light text-primary rounded-lg px-4 py-2 text-right font-semibold">
          {getRateDisplay()}
        </h3>

        <div className="flex justify-center text-neutral-700 ">
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

        <div>
          <p className="flex items-center gap-2 text-neutral-500 mb-4">
            {property.location.street}
            {", "}
            {property.location.city}
            {", "}
            {property.location.state} {property.location.zipcode}
          </p>
        </div>
        <div className="card-actions justify-center">
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
