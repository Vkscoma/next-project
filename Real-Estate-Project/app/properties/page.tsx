import PropertyCard from "@/components/PropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";

const PropertiesPage = async () => {
  await connectDB();
  const properties = await Property.find({}).lean(); // lean method converts the mongoose document to a plain JavaScript object, as long as its rea
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container mx-auto px-4 py-6">
        {properties.length === 0 ? (
          <h1>No properties found</h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
