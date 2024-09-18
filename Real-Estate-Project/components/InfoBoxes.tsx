import InfoBox from "@/components/InfoBox";

const InfoBoxes = () => {
  const infoBoxesData = [
    {
      title: "For Renters",
      description:
        "Find your dream rental property today! Bookmark properties and apply online.",
      buttonText: "Browse Rentals",
      backgroundColor: "#b0a8b9",
      link: "/properties",
    },
    {
      title: "For Property Owners",
      description:
        "List your property for rent or sale today! Rent as an Airbnb or sell your property.",
      buttonText: "Add Property",
      backgroundColor: "#3b4b6f",
      link: "/properties/add",
    },
  ];

  return (
    <div className="container-xl lg:container m-auto mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 rounded-lg">
        {infoBoxesData.map((infoBox, index: number) => (
          <InfoBox
            key={index}
            title={infoBox.title}
            description={infoBox.description}
            buttonText={infoBox.buttonText}
            backgroundColor={infoBox.backgroundColor}
            link={infoBox.link}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoBoxes;
