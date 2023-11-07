import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Order() {
  const [product, setProduct] = useState(null);
  const [purchase, setPurchase] = useState(null);
  const [evaluate, setEvaluate] = useState(null);
  const { user } = useAuth();

  return (
    <div className="flex items-center border border-slate-400 rounded-md overflow-hidden">
      <img
        src=""
        alt=""
        className="w-32 xs:w-40 h-full object-cover object-center"
      />
      <div className="h-full flex-1 p-4">
        <h3 className="text-slate-900 font-semibold">Blusa</h3>

        <span className="block text-slate-500 mt-1">
          Registrado em:{" "}
          <strong className="text-slate-800 font-medium ms-2">
            12/12/2022
          </strong>
        </span>

        <span className="block text-slate-500 mt-1">
          Quantidade:{" "}
          <strong className="text-slate-800 font-medium ms-2">12</strong>
        </span>

        <div className="flex items-center justify-between gap-2">
          <span className="inline-block text-lime-600 mt-1">Entregue</span>
          <span className="inline-block text-slate-800 font-bold mt-1">
            R$ 120
          </span>
        </div>

        {evaluate == null ? (
          <button className="w-full text-center mt-4 px-4 py-1 rounded-md bg-slate-50 text-slate-900 border border-slate-800 uppercase transition-colors hover:bg-slate-800 hover:text-slate-50">
            Avaliar
          </button>
        ) : (
          <div className="text-center mt-4 px-4 py-1 rounded-md bg-slate-50 text-slate-900 border border-slate-800">
            4 estrelas
          </div>
        )}
      </div>
    </div>
  );
}
