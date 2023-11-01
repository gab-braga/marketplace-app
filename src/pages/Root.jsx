import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Outlet />
    </div>
  );
}
