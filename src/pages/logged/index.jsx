import { Navigate, Outlet } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useAuth } from "../../context/AuthContext";

export default function Logged() {
  const { isLogged } = useAuth();

  if (!isLogged()) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
