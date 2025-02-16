import { FaPlayCircle } from "react-icons/fa";
import { HiMiniRocketLaunch } from "react-icons/hi2";
const Hero = () => {
  return (
    <div className="hero py-10 bg-gradient-to-r from-gray-950 to-gray-900">
      <div className="hero-content text-center w-11/12 mx-auto">
        <div className="w-2/3 mx-auto">
          <h1 className="text-6xl font-bold  mx-auto py-8">
            Discover & Collect Extraordinary NFTs
          </h1>
          <p className="py-6 text-center text-2xl font-light font-sans ">
            Enter the world of digital art and collectibles. Explore unique NFTs
            created by artists worldwide.
          </p>
          <div className='flex gap-4 justify-center items-center py-6'>
            <button className="btn btn-bg text-lg py-8 px-6  rounded-xl">
              <HiMiniRocketLaunch /> Start Creating
            </button>
            <button className="btn bg-transparent text-lg py-8 px-6  rounded-xl border-1">
              <FaPlayCircle /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
