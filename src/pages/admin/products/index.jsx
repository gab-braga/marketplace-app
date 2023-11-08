import { Check, Pencil, X } from "@phosphor-icons/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ENDPOINTS } from "../../../config/api";
import FormProduct from "./FormProduct";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(ENDPOINTS.getAdminProducts(), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setProducts(data);
      });
  }, []);

  return (
    <main className="container mx-auto flex-1 p-6 pb-16">
      <section className="w-full mt-8">
        <h1 className="text-xl text-slate-900 font-semibold uppercase">
          Produtos
        </h1>

        <div className="w-full mt-4 overflow-scroll">
          <table className="w-full min-w-table border-collapse">
            <colgroup>
              <col className="w-3/12" />
              <col className="w-1/12" />
              <col className="w-2/12" />
              <col className="w-2/12" />
              <col className="w-1/12" />
              <col className="w-2/12" />
              <col className="w-1/12" />
            </colgroup>

            <thead>
              <tr>
                <th className="p-2 border border-slate-900">Nome</th>
                <th className="p-2 border border-slate-900">Quantidade</th>
                <th className="p-2 border border-slate-900">Disponibilidade</th>
                <th className="p-2 border border-slate-900">Preço</th>
                <th className="p-2 border border-slate-900">Desconto</th>
                <th className="p-2 border border-slate-900">Categorias</th>
                <th className="p-2 border border-slate-900">Editar</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr key={p?.id}>
                  <td className="px-2 py-1 border border-slate-900">
                    {p?.nome}
                  </td>
                  <td className="px-2 py-1 border border-slate-900">
                    {p?.quantidade}
                  </td>
                  <td className="px-2 py-1 border border-slate-900">
                    {p?.disponibilidade == 1 ? (
                      <span className="flex items-center justify-start gap-2 text-green-600">
                        <Check /> Disponível
                      </span>
                    ) : (
                      <span className="flex items-center justify-start gap-2 text-red-600">
                        <X /> Indisponível
                      </span>
                    )}
                  </td>
                  <td className="px-2 py-1 border border-slate-900">
                    R$ {p?.preco}
                  </td>
                  <td className="px-2 py-1 border border-slate-900">
                    R$ {p?.desconto}
                  </td>
                  <td className="px-2 py-1 border border-slate-900">
                    {p?.categoria.replaceAll(";", ", ")}
                  </td>
                  <td className="px-2 py-1 border border-slate-900">
                    <button className="w-full flex items-center justify-center gap-2 px-2 py-1 rounded text-slate-200 bg-slate-800">
                      <Pencil /> Alterar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="w-full mt-8">
        <h2 className="text-xl text-slate-900 font-semibold uppercase">
          Novo Produto
        </h2>

        <FormProduct />
      </section>
    </main>
  );
}
