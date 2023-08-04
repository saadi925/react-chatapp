import { useState } from "react";
import { Searchbar } from "..";
import User from "../User/User";
import { dummyData } from "./dummy";

const Users = () => {
  const [userList, setUserList] = useState(dummyData);

  return (
    <div className=" xl:min-h-[calc(100vh-64px)] bg-shade p-2  xl:w-1/5 ">
      <Searchbar />
      <div className="my-5  max-h-[calc(100vh-200px)]  flex flex-nowrap gap-3   xl:block overflow-x-auto xl:overflow-y-auto xl:no-scrollbar   ">
        {userList &&
          userList.map((user) => (
            <User key={user.id} name={user.name} message={user.message} />
          ))}
      </div>
    </div>
  );
};

export default Users;
