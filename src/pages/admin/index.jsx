import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useAuth } from "../../context/AuthContext";

export default function Admin() {
  const { isAdmin } = useAuth();

  if (!isAdmin()) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <Header />
      <h1>Admin</h1>
      <Outlet />
      <Footer />
    </>
  );
}
