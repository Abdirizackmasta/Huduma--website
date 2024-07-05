export default function Hero() {
  return (
    <div className="bg-[url('/bg1.jpg')] bg-no-repeat bg-cover bg-center relative z-10 pb-32 overflow-x-hidden">
      <div className="lg:flex max-w-[1400px] mx-auto justify-between items-center px-3 pt-12">
        <div className="lg:w-2/5">
          <h2 className="xl:text-[4rem] lg:text-5xl text-4xl lg:text-left text-center font-bold lg:leading-snug mb-5">
            It’s A Big World Out There, Go Explore
          </h2>
          <p className="text-gray text-lg leading-normal mb-8">
              In the vast world, endless adventures await those who step beyond their comfort zones. Whether exploring new landscapes or immersing in diverse cultures, each journey enriches life and deepens our understanding. Embrace the unknown, seek new wonders, and let discovery guide
          </p>
          <div className="flex flex-1 gap-5">
            <button className="bg-primary rounded border transition-bg shadow h-12 lg:px-10 lg:h-16 lg:w-auto w-full outline-none text-white hover:bg-white hover:text-primary cursor-pointer text-base hover:border hover:border-primary">
              Get Exploration
            </button>
            <button className="bg-white border rounded transition-bg shadow h-12 lg:px-10 lg:h-16 lg:w-auto w-full outline-none text-primary hover:bg-primary hover:text-white cursor-pointer text-base hover:border hover:border-primary">
              Read More
            </button>
          </div>
        </div>
        <div className="lg:w-3/5 flex items-center justify-end lg:pt-0 pt-10 lg:-mr-28">
          <img src="/main.png" alt="" className="w-[45rem] h-full" />
        </div>
      </div>
    </div>
  );
}
