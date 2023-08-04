import {
  ChatIcon,
  Folder,
  Group,
  SettingsIcon,
  Star,
  UserIcon,
} from "../../assets/icons";

const SidePannel = () => {
  return (
    <div className="  py-3 flex xl:block  xl:min-h-[calc(100vh-64px)] justify-between">
      <img
        src="/icons/light/hamburger.png"
        className="p-2 sm:hidden cursor-pointer"
        width={50}
        alt="menu"
      />
      <ul className="px-5 text-white  py-5   gap-6 hidden sm:flex xl:block">
        <li className="cursor-pointer">
          <img src={ChatIcon} alt="chats" width={40} />
          Chats
        </li>
        <li className="cursor-pointer">
          <img src={Folder} alt="chats" width={40} />
          Work
        </li>
        <li className="cursor-pointer">
          <img src={Group} alt="chats" width={40} />
          Groups
        </li>
        <li className="cursor-pointer">
          <img src={Star} alt="chats" width={40} />
          Favourites
        </li>
      </ul>
      <div className="md:h-0.5 bg-shade"></div>
      <div className="cursor-pointer px-5 xl:absolute bottom-10 text-white flex items-center gap-2 xl:block">
        <div className="">
          <img src={UserIcon} alt="chats" width={40} />
          <span className="hidden md:block">Profile</span>
        </div>
        <div className="">
          <img src={SettingsIcon} alt="chats" width={40} />
          <span className="hidden md:block">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default SidePannel;
