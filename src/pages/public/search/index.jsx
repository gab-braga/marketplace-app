import { useParams } from "react-router-dom";
import Card from "../../../components/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINTS } from "../../../config/api";

export default function Search() {
  const { search } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(ENDPOINTS.getPublicProductsByName(search)).then(({ data }) => {
      setProducts(data);
    });
  }, [search]);

  return (
    <main className="container mx-auto p-6 pb-16 flex-1">
      <section className="w-full mt-8">
        <h2 className="text-xl text-slate-900 font-semibold uppercase">
          Resultados da busca
        </h2>

        <div className="w-full mt-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          {products.map((p) => (
            <Card key={p.id} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
