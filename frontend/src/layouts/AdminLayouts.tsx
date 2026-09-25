import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/common/AdminSidebar";
import AdminBottomNav from "../components/common/AdminBottomNav";

const AdminLayouts = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <AdminSidebar />

      <main className="min-h-screen lg:ml-64">
        <Outlet />
      </main>

      <AdminBottomNav />
    </div>
  );
};

export default AdminLayouts;