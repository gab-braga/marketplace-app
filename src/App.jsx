import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/public/home";
import Products from "./pages/public/products";
import Root from "./pages/Root";
import Public from "./pages/public";
import Search from "./pages/public/search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Public />}>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="search/:search" element={<Search />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
