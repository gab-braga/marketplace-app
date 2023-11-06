import { Link } from "react-router-dom";
import Product from "../../assets/imagens/image-01.jpg";
import Stars from "../stars";

export default function Card() {
  return (
    <Link
      to="/product/1"
      className="border border-slate-400 rounded-md overflow-hidden"
    >
      <div className="h-full p-0 flex flex-col items-start">
        <img src={Product} className="w-full object-cover object-center" />
        <div className="w-full flex-1 px-4 py-1 flex flex-col">
          <h4 className="text-md text-slate-900 font-medium truncate">
            Blusa Verde Masculina
          </h4>
          <Stars rating={3.6} total={330} />
          <div className="mt-3 flex-1 flex items-end justify-between">
            <span className="text-xs text-slate-600 line-through">R$ 250</span>
            <span className="text-end flex-1 text-md text-slate-900 font-bold">
              R$ 150
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
