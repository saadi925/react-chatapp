import { Favourite, UserIcon } from "../../assets/icons";
interface userProps {
  name: string;
  message: string;
}
const User = ({ name, message }: userProps) => {
  return (
    <div className="py-1 text-white  xl:flex hover:bg-slate-700 flex-basis-1 transition-all cursor-pointer bg-opacity-40 px-2 xl:px-3 gap-2">
      <div className="">
        <img src={UserIcon} alt="user" width={50} />
      </div>
      <div className="w-full">
        <div className="block xl:fle justify-between items-center w-full">
          <h2 className="sm:text-xl md:text-2xl">
            {name.length > 7 ? `${name.substring(0, 5)}` : name}
          </h2>
          <p className="text-white text-opacity-40 hidden xl:block">
            4 min ago.
          </p>
        </div>
        <div className="hidden xl:flex w-full">
          <p className="text-white text-opacity-50">
            {message.substring(0, 25)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
