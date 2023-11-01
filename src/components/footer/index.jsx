import {
  FacebookLogo,
  InstagramLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="px-8 py-6 bg-slate-300">
        <div className="container mx-auto flex justify-between gap-2 flex-col sm:flex-row">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-slate-600 font-medium hover:text-slate-800"
            >
              Conta
            </Link>
            <Link
              to="/"
              className="text-slate-600 font-medium hover:text-slate-800"
            >
              Carrinho
            </Link>
            <Link
              to="/"
              className="text-slate-600 font-medium hover:text-slate-800"
            >
              Pedidos
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-slate-600 font-medium hover:text-slate-800"
            >
              atendimento@trustyle.com
            </Link>
            <Link
              to="/"
              className="text-slate-600 font-medium hover:text-slate-800"
            >
              0800 9898 9898
            </Link>
            <Link
              to="/"
              className="text-slate-600 font-medium hover:text-slate-800"
            >
              São Paulo, SP
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-slate-600 font-medium hover:text-slate-800"
            >
              Termos e Condições
            </Link>
            <Link
              to="/"
              className="text-slate-600 font-medium hover:text-slate-800"
            >
              Políticas e Privacidade
            </Link>
            <Link
              to="/"
              className="text-slate-600 font-medium hover:text-slate-800"
            >
              Perguntas Frequentes
            </Link>
            <Link
              to="/"
              className="text-slate-600 font-medium hover:text-slate-800"
            >
              Ajuda
            </Link>
          </div>
        </div>
      </div>
      <div className="px-8 py-4 bg-slate-900 grid grid-cols-1 md:grid-cols-4 items-center justify-stretch gap-4">
        <Link
          to="/"
          className="flex items-center justify-center md:justify-start"
        >
          <img src={Logo} alt="Logomarca" className="h-10" />
        </Link>
        <p className="text-white text-center md:col-span-2">
          Trustyle.com. Alguns direitos reservados.
        </p>
        <div className="flex items-center justify-center md:justify-end gap-4">
          <Link to="/">
            <InstagramLogo
              className="text-slate-400 transition-colors hover:text-slate-600"
              size={32}
              weight="regular"
            />
          </Link>
          <Link to="/">
            <FacebookLogo
              className="text-slate-400 transition-colors hover:text-slate-600"
              size={32}
              weight="regular"
            />
          </Link>
          <Link to="/">
            <YoutubeLogo
              className="text-slate-400 transition-colors hover:text-slate-600"
              size={32}
              weight="regular"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
