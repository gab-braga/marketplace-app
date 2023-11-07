import { useEffect, useState } from "react";
import Order from "../../../components/order";
import axios from "axios";
import { ENDPOINTS } from "../../../config/api";
import { useAuth } from "../../../context/AuthContext";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(ENDPOINTS.getClientOrders(user?.id), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setOrders(data);
      });
  }, []);

  return (
    <main className="container mx-auto flex-1 p-6 pb-16">
      <section className="w-full mt-8">
        <h1 className="text-xl text-slate-900 font-semibold uppercase">
          Meus Pedidos
        </h1>

        <div className="mt-4 w-full grid grid-cols-1 ld:grid-cols-2 xl:grid-cols-3 gap-10">
          {orders.map((order) => (
            <Order key={order?.id} {...order} />
          ))}
        </div>
      </section>
    </main>
  );
}
