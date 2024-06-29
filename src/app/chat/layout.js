import Users from "@/components/aside/Users";
import Profile from "@/components/profile/Profile";
import Image from "next/image";

const layout = ({ children }) => {
  

  return (
    <div className="lg:h-screen grid grid-cols-12">
      <aside className="bg-white col-span-2 border-r border-gray-200 overflow-y-auto">
        <Profile />
        <Users />
      </aside>
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default layout;
