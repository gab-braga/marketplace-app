import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/public/home";
import Product from "./pages/public/product";
import Root from "./pages/Root";
import Public from "./pages/public";
import Search from "./pages/public/search";
import Auth from "./pages/auth";
import Login from "./pages/auth/login";

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
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
