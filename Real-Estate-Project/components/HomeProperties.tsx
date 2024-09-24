import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import Button from "@/components/Button";
import connectDB from "@/config/database";
import Property from "@/models/Property";

const HomeProperties = async () => {
  await connectDB();
  const recentProperties = await Property.find({})
    .sort({ createdAt: -1 })
    .limit(3)
    .lean();
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container mx-auto px-4 py-6">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Featured Properties
          </h2>
          {recentProperties.length === 0 ? (
            <h1>No properties found</h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="mx-auto max-w-lg my-6 px-6">
        <Link href="/properties" className="flex justify-center items-center">
          <Button className="w-full bg-neutral-800 hover:bg-neutral-600">
            View All Properties
          </Button>
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
