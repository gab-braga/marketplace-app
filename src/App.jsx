import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/public/home";
import Product from "./pages/public/product";
import Root from "./pages/Root";
import Public from "./pages/public";
import Search from "./pages/public/search";
import Auth from "./pages/auth";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Admin from "./pages/admin";
import Logged from "./pages/logged";
import Users from "./pages/admin/users";
import Products from "./pages/admin/products";
import Sales from "./pages/admin/sales";
import Cart from "./pages/logged/cart";
import Profile from "./pages/logged/profile";
import Orders from "./pages/logged/orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Public />}>
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="search/:search" element={<Search />} />
          </Route>
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
            <Route path="sales" element={<Sales />} />
          </Route>
          <Route path="/logged" element={<Logged />}>
            <Route path="cart" element={<Cart />} />
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
