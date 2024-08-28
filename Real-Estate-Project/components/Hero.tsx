const Hero = () => {
  return (
    <div className="hero bg-primary min-h-96 text-light">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">Find The Perfect Rental</h1>
          <p className="py-6">
            Discover the property that fits your needs and budget.
          </p>
          <div className="flex justify-center">
            <input
              type="text"
              className="w-96 input input-bordered text-neutral-700 rounded-lg"
              placeholder="Enter a location (e.g. city, state, zip)"
            />
            <button className="btn btn-primary ml-2 text-light rounded-lg">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
