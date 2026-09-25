import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/common/AdminSidebar";
import AdminBottomNav from "../components/common/AdminBottomNav";

const AdminLayouts = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <AdminSidebar />

      <main className="min-h-screen pb-20 lg:ml-64 lg:pb-0">
        <Outlet />
      </main>

      <AdminBottomNav />
    </div>
  );
};

export default AdminLayouts;