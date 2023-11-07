import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { ENDPOINTS } from "../../config/api";
import Modal from "../modal";

export default function Order({ produto_id, compra_id, quantidade, total }) {
  const [product, setProduct] = useState(null);
  const [purchase, setPurchase] = useState(null);
  const [evaluate, setEvaluate] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { user } = useAuth();

  function initializeData() {
    const token = localStorage.getItem("token");
    axios
      .get(ENDPOINTS.getClientOrdersProduct(user?.id, produto_id), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data: { product, evaluate } }) => {
        setProduct(product);
        setEvaluate(evaluate);
      });
    axios
      .get(ENDPOINTS.getClientOrdersPurchase(compra_id), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setPurchase(data);
      });
  }

  useEffect(() => {
    initializeData();
  }, []);

  function formatDate(str) {
    return new Date(str).toLocaleDateString();
  }

  function evaluateProduct(value) {
    const token = localStorage.getItem("token");
    axios
      .post(
        ENDPOINTS.postClientOrdersEvaluate(user?.id),
        { nota: value, produto_id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        setOpenModal(false);
        initializeData();
      });
  }

  return (
    <div className="flex items-center border border-slate-400 rounded-md overflow-hidden">
      <img
        src={product?.foto}
        alt={product?.nome}
        className="w-32 xs:w-40 h-full object-cover object-center"
      />
      <div className="h-full flex-1 p-4">
        <h3 className="text-slate-900 font-semibold">{product?.nome}</h3>

        <span className="block text-slate-500 mt-1">
          Registrado em:{" "}
          <strong className="text-slate-800 font-medium ms-2">
            {formatDate(purchase?.dataRegistro)}
          </strong>
        </span>

        <span className="block text-slate-500 mt-1">
          Quantidade:{" "}
          <strong className="text-slate-800 font-medium ms-2">
            {quantidade}
          </strong>
        </span>

        <div className="flex items-center justify-between gap-2">
          <span className="inline-block text-lime-600 mt-1">Entregue</span>
          <span className="inline-block text-slate-800 font-bold mt-1">
            R$ {total}
          </span>
        </div>

        {evaluate == null ? (
          <button
            onClick={() => setOpenModal(true)}
            className="w-full text-center mt-4 px-4 py-1 rounded-md bg-slate-50 text-slate-900 border border-slate-800 uppercase transition-colors hover:bg-slate-800 hover:text-slate-50"
          >
            Avaliar
          </button>
        ) : (
          <div className="text-center mt-4 px-4 py-1 rounded-md bg-slate-50 text-slate-900 border border-slate-800">
            {evaluate?.nota} estrelas
          </div>
        )}
      </div>

      {openModal && (
        <Modal
          title="Avaliar produto"
          message={`O que você achou de ${product?.nome}?`}
        >
          <div className="flex gap-2">
            <button
              onClick={() => evaluateProduct(1)}
              className="text-center mt-4 px-3 py-1 rounded-md bg-slate-50 text-slate-900 border border-slate-800 transition-colors hover:bg-slate-800 hover:text-slate-50"
            >
              1
            </button>
            <button
              onClick={() => evaluateProduct(2)}
              className="text-center mt-4 px-3 py-1 rounded-md bg-slate-50 text-slate-900 border border-slate-800 transition-colors hover:bg-slate-800 hover:text-slate-50"
            >
              2
            </button>
            <button
              onClick={() => evaluateProduct(3)}
              className="text-center mt-4 px-3 py-1 rounded-md bg-slate-50 text-slate-900 border border-slate-800 transition-colors hover:bg-slate-800 hover:text-slate-50"
            >
              3
            </button>
            <button
              onClick={() => evaluateProduct(4)}
              className="text-center mt-4 px-3 py-1 rounded-md bg-slate-50 text-slate-900 border border-slate-800 transition-colors hover:bg-slate-800 hover:text-slate-50"
            >
              4
            </button>
            <button
              onClick={() => evaluateProduct(5)}
              className="text-center mt-4 px-3 py-1 rounded-md bg-slate-50 text-slate-900 border border-slate-800 transition-colors hover:bg-slate-800 hover:text-slate-50"
            >
              5
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
