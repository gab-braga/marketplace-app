import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";

export default function Root() {
  return (
    <AuthProvider>
      <div className="min-h-screen w-full flex flex-col">
        <Outlet />
      </div>
      <Toaster />
    </AuthProvider>
  );
}
