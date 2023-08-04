import { SearchIcon } from "../../assets/icons";

const Searchbar = () => {
  return (
    <div className="flex py-3 px-2 gap-4 rounded-full text-white border border-transparent transition-all bg-slate-800 focus-within:border-slate-400">
      <img
        className="cursor-pointer"
        src={SearchIcon}
        alt="SearchIcon"
        width={30}
      />
      <input
        type="text"
        placeholder="Seach"
        className="focus:outline-none bg-slate-800 w-full"
      />
    </div>
  );
};

export default Searchbar;
