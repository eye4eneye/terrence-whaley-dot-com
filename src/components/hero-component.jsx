const Hero = () => {
  return (
    <section className="grid lg:grid-cols-2 sm:grid-cols-1 mx-auto place-self-center">
      <div className="px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16">
        <div className="sm:mx-auto">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-cream">
            I'm Terrence
          </h1>
          <p className="font-bold max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 text-cream">
            I use <strong className="text-red">machine learning</strong> to help
            small businesses make smarter decisions faster.
          </p>
        </div>
      </div>
      <div className="">
        <img
          className="sm:mx-auto m-8 rounded-md min-h-[calc(100vh_-_316px)] max-h-[calc(1400px_-_316px)] h-[calc(100vh_-_316px)]"
          src="https://portfolio-terrence-bucket.s3.us-west-1.amazonaws.com/dumbo-1.jpg"
        />
      </div>
    </section>
  );
};

export default Hero;
