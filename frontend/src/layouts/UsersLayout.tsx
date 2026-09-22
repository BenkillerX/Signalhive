import { Outlet } from "react-router-dom";
import UserSidebar from "../components/common/UserSiderbar";
import BottomNav from "../components/common/BottomNav";

const UsersLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <main className="min-w-0 lg:ml-64">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default UsersLayout;
