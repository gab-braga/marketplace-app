import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import LogoMobile from "../../assets/logo-mobile.svg";
import {
  ChartBar,
  CursorClick,
  List,
  MagnifyingGlass,
  Package,
  ShoppingCart,
  SignOut,
  Tag,
  User,
  Users,
  LockOpen,
} from "@phosphor-icons/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    const { search } = data;
    navigate(`/search/${search}`);
  }

  return (
    <header className="w-full p-4 bg-slate-900">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
        <Link to="/">
          <img
            src={Logo}
            alt="Logomarca"
            className="h-10 min-h-min hidden sm:block"
          />
          <img
            src={LogoMobile}
            alt="Logomarca"
            className="h-10 min-h-min block sm:hidden"
          />
        </Link>
        <form
          className="flex-1 flex items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            className="flex-1 w-full max-w-md h-8 px-5 border-none rounded-s-full text-white outline-none bg-slate-800"
            required
            {...register("search")}
          />
          <button
            type="submit"
            className="inline-block w-9 h-8 bg-slate-800 overflow-hidden rounded-e-full"
          >
            <MagnifyingGlass
              weight="regular"
              size={20}
              className="text-white"
            />
          </button>
        </form>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white p-2 focus:outline-none lg:hidden"
        >
          <List weight="regular" size={20} className="text-white" />
        </button>
        <div
          className={`w-full lg:w-auto lg:block ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-start justify-stretch gap-4">
            <li>
              <Link
                to="/auth/login"
                className="flex items-center justify-start gap-3 lg:gap-1 text-slate-300 hover:text-slate-100"
              >
                <LockOpen className="text-inherit" weight="regular" size={20} />
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center justify-start gap-3 lg:gap-1 text-slate-300 hover:text-slate-100"
              >
                <CursorClick
                  className="text-inherit"
                  weight="regular"
                  size={20}
                />
                Cadastre-se
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center justify-start gap-3 lg:gap-1 text-slate-300 hover:text-slate-100"
              >
                <Users className="text-inherit" weight="regular" size={20} />
                Usuários
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center justify-start gap-3 lg:gap-1 text-slate-300 hover:text-slate-100"
              >
                <Tag className="text-inherit" weight="regular" size={20} />
                Produtos
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center justify-start gap-3 lg:gap-1 text-slate-300 hover:text-slate-100"
              >
                <ChartBar className="text-inherit" weight="regular" size={20} />
                Vendas
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center justify-start gap-3 lg:gap-1 text-slate-300 hover:text-slate-100"
              >
                <ShoppingCart
                  className="text-inherit"
                  weight="regular"
                  size={20}
                />
                Carrinho
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center justify-start gap-3 lg:gap-1 text-slate-300 hover:text-slate-100"
              >
                <Package className="text-inherit" weight="regular" size={20} />
                Pedidos
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center justify-start gap-3 lg:gap-1 text-slate-300 hover:text-slate-100"
              >
                <User className="text-inherit" weight="regular" size={20} />
                Conta
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center justify-start gap-3 lg:gap-1 text-slate-300 hover:text-slate-100"
              >
                <SignOut className="text-inherit" weight="regular" size={20} />
                Sair
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
