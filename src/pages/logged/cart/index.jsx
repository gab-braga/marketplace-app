import axios from "axios";
import Item from "../../../components/item";
import { ENDPOINTS } from "../../../config/api";
import { useAuth } from "../../../context/AuthContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { user } = useAuth();
  const [items, setItems] = useState([]);
  const [carrinho, setCarrinho] = useState(null);
  const navigate = useNavigate();

  function initializeItems() {
    const token = localStorage.getItem("token");
    axios
      .get(ENDPOINTS.getClientCart(user?.id), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data: { items, carrinho } }) => {
        setItems(items);
        setCarrinho(carrinho);
      });
  }

  useEffect(() => {
    initializeItems();
  }, []);

  const changeQuantity = (id, quantidade) => {
    const token = localStorage.getItem("token");
    axios
      .put(
        ENDPOINTS.putClientCart(id),
        { quantidade },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        initializeItems();
      });
  };

  function finishPuchase() {
    const token = localStorage.getItem("token");
    axios
      .post(
        ENDPOINTS.postClientCartFinish(carrinho?.id),
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        toast.success("Compra finalizada.");
        navigate("/logged/orders");
      });
  }

  return (
    <main className="container mx-auto flex-1 p-6 pb-16">
      <section className="w-full mt-8">
        <h1 className="text-xl text-slate-900 font-semibold uppercase">
          Carrinho de Compras
        </h1>

        {items?.length == 0 ? (
          <div className="text-slate-700">Seu carrinho está vazio.</div>
        ) : (
          <>
            <div className="w-full mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              {items.map((item) => (
                <Item
                  key={item?.id}
                  {...item}
                  changeQuantity={changeQuantity}
                />
              ))}
            </div>

            <h2 className="text-xl text-slate-900 font-semibold uppercase mt-8">
              Finalizar compra
            </h2>
            <div className="mt-4">
              <h3 className="text-slate-800">
                Total: <strong>R$ {carrinho?.total}</strong>
              </h3>
              <button
                onClick={finishPuchase}
                className="text-center mt-2 px-4 py-1 rounded-md bg-slate-900 text-slate-50 uppercase transition-colors hover:bg-slate-800"
              >
                Finalizar Agora
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
