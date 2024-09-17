const Hero = () => {
  return (
    <div className="md:hero flex relative justify-center items-center max-w-full bg-primary min-h-96 text-light">
      <div className="hero-content text-center">
        <div className="md:max-w-xl">
          <h1 className="text-2xl font-bold md:text-5xl">
            Find The Perfect Rental
          </h1>
          <p className="py-6">
            Discover the property that fits your needs and budget.
          </p>
          <div className="flex md:flex-row flex-col justify-center">
            <input
              type="text"
              className="md:w-96 input input-bordered text-neutral-700 rounded-lg"
              placeholder="Enter a location (e.g. city, state, zip)"
            />
            <button className="btn md:ml-2 md:mt-0 mt-4 rounded-xl border-solid w-32 mx-auto ">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
