import { BsFillBoxFill } from "react-icons/bs";
const NftForm = () => {
  return (
    <div className="flex justify-center py-10 card-bg">
      <div className="card  max-w-xl shrink-0 shadow-2xl w-11/12 mx-auto">
        <div className="card-body bg-[#0D121D] border-1 border-gray-700 rounded-2xl">
          <h3 className="font-semibold text-2xl">Mint Your NFT</h3>
          <fieldset className="fieldset mt-2">
            <label className="fieldset-label text-base">NFT Name</label>
            <input
              type="email"
              className="input w-full bg-gray-800 "
              placeholder="Enter NFT Name"
            />
            <label className="fieldset-label text-base mt-2">Description</label>
            <textarea
              className="textarea w-full bg-gray-800"
              placeholder="Describe your NFT"
            ></textarea>
            <label className="fieldset-label text-base mt-2">Image URL</label>
            <input
              type="link"
              className="input w-full bg-gray-800"
              placeholder="Enter image URL"
            />

            <button className="btn btn-bg mt-4 text-base">
              {" "}
              <BsFillBoxFill /> Mint NFT
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default NftForm;
