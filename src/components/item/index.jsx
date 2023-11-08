import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ENDPOINTS } from "../../config/api";

export default function Item({
  id,
  produto_id,
  quantidade,
  total,
  changeQuantity,
}) {
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get(ENDPOINTS.getPublicProduct(produto_id)).then(({ data }) => {
      setProduct(data);
    });
  }, []);
  return (
    <div className="flex items-center border border-slate-400 rounded-md overflow-hidden">
      <img
        src={product?.foto}
        alt={product?.nome}
        className="w-32 h-full xs:w-40 object-cover object-center"
      />
      <div className="h-full flex-1 p-4">
        <h3 className="text-slate-900 font-semibold">{product?.nome}</h3>
        <div className="mt-2">
          <label htmlFor="qnt">Quantidade</label>
          <div className="flex gap-2">
            <button
              onClick={() => changeQuantity(id, quantidade - 1)}
              className="w-6 h-6 rounded text-slate-800 border border-slate-800"
            >
              -
            </button>
            <input
              type="number"
              id="qnt"
              value={quantidade}
              className="bg-slate-200 rounded w-16 px-2"
            />
            <button
              onClick={() => changeQuantity(id, quantidade + 1)}
              className="w-6 h-6 rounded text-slate-800 border border-slate-800"
            >
              +
            </button>
          </div>
        </div>

        <span className="inline-block text-slate-500 mt-2">
          Total:{" "}
          <strong className="text-slate-800 font-bold text-lg ms-2">
            R$ {total}
          </strong>
        </span>
      </div>
    </div>
  );
}
