import { Link } from "react-router-dom";
import Stars from "../stars";

export default function Card({
  id,
  nome,
  foto,
  avaliacaoTotal,
  avaliacaoMedia,
  desconto,
  preco,
  precoFinal,
}) {
  return (
    <Link
      to={`/product/${id}`}
      className="border border-slate-400 rounded-md overflow-hidden"
    >
      <div className="h-full p-0 flex flex-col items-start">
        <img src={foto} className="w-full object-cover object-center" />
        <div className="w-full flex-1 px-4 py-1 flex flex-col">
          <h4 className="text-md text-slate-900 font-medium truncate">
            {nome}
          </h4>
          <Stars rating={avaliacaoMedia} total={avaliacaoTotal} />
          <div className="mt-3 flex-1 flex items-end justify-between">
            {desconto > 0 && (
              <span className="text-xs text-slate-600 line-through">
                R$ {preco}
              </span>
            )}
            <span className="text-end flex-1 text-md text-slate-900 font-bold">
              R$ {precoFinal}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
