import Image from "next/image";
import home_hero from "@/assets/images/home_hero.jpg";

const Hero = () => {
  return (
    <div className="flex relative justify-center items-center max-w-full min-h-96 text-light">
      {/* Background Image */}
      <div className="absolute top-0 left-0 right-0 w-full h-full">
        <Image
          src={home_hero}
          alt="Hero background image"
          fill={true}
          style={{ filter: "brightness(0.5)", objectFit: "cover" }}
          loading="lazy"
          placeholder="blur"
          quality={100}
        />
      </div>

      {/* Hero Content */}
      <div className="hero-content text-center z-10 ">
        <div className="md:max-w-xl">
          <h1 className="text-2xl font-bold md:text-4xl">
            Find The Perfect Property
          </h1>
          <p className="md:mb-6 mb-2 md:text-xl text-lg">
            Discover the property that fits your needs and budget.
          </p>
          <div className="flex md:flex-row flex-col justify-center">
            <input
              type="text"
              className="md:w-96 input input-bordered text-neutral-700 rounded-lg"
              placeholder="Enter a location (e.g. city, state, zip)"
            />
            <button className="btn md:ml-2 md:mt-0 mt-4 rounded-xl border-solid border-2 w-32 mx-auto duration-200 ease-in-out transition-all">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
