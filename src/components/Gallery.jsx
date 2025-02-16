const Gallery = () => {
  return (
    <div className=" py-10 card-bg">
      <div className=" w-11/12 mx-auto ">
        <h3 className="font-bold text-2xl py-6 ">Your NFT Gallery</h3>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <div className="card bg-[#0D121D] w-96 shadow-sm border-1 border-gray-800">
            <figure>
              <img
                src="https://www.doubloin.com/wp-content/uploads/2023/09/nft-applications.webp"
                alt="NFT"
                className="w-full h-52 object-cover"
              />
            </figure>
            <div className=" p-4">
              <h2 className="card-title">Cosmic Dreams #001</h2>
              <p className="text-gray-400">
                A journey through digital dimensions
              </p>
            </div>
          </div>
          <div className="card bg-[#0D121D] w-96 shadow-sm border-1 border-gray-800">
            <figure>
              <img
                src="https://elevate.ca/wp-content/uploads/2022/04/galaxy-7040416_1280-1024x576.png"
                alt="NFT"
                className="w-full h-52 object-cover"
              />
            </figure>
            <div className=" p-4">
              <h2 className="card-title">Cosmic Dreams #001</h2>
              <p className="text-gray-400">
                A journey through digital dimensions
              </p>
            </div>
          </div>
          <div className="card bg-[#0D121D] w-96 shadow-sm border-1 border-gray-800">
            <figure>
              <img
                src="https://cdn.prod.website-files.com/62e29661f8efaa50d68a5786/642e8593346bbd4898663ffa_NFT%20%26%20ART.png"
                alt="NFT"
                className="w-full h-52 object-cover"
              />
            </figure>
            <div className=" p-4">
              <h2 className="card-title">Cosmic Dreams #001</h2>
              <p className="text-gray-400">
                A journey through digital dimensions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
