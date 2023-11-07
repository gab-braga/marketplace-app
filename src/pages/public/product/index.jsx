import Stars from "../../../components/stars";
import Card from "../../../components/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINTS } from "../../../config/api";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import toast from "react-hot-toast";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const { isLogged, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(ENDPOINTS.getPublicProduct(id)).then(({ data }) => {
      setProduct(data);
    });
  }, [id]);

  useEffect(() => {
    const category = product?.categoria?.split(";")[0];
    axios
      .get(ENDPOINTS.getPublicProductsByCategory(category))
      .then(({ data }) => {
        setProducts(data);
      });
  }, [product]);

  function addCart(produto_id) {
    if (isLogged()) {
      const token = localStorage.getItem("token");
      axios
        .post(
          ENDPOINTS.postClientCart(user?.id),
          { produto_id },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => {
          toast.success("Item adicionado ao carrinho.");
        });
    } else {
      navigate("/auth/login");
    }
  }

  return (
    <main className="container mx-auto p-6 pb-16 flex-1">
      <section className="w-full mt-8">
        <div className="flex flex-col md:flex-row justify-stretch border border-slate-400 rounded-md overflow-hidden">
          <img
            src={product?.foto}
            alt={product?.nome}
            className="w-full md:w-72 lg:w-96 object-cover object-center"
          />
          <div className="flex flex-col flex-1 p-6">
            <h1 className="text-lg xl:text-xl font-bold">{product?.nome}</h1>
            <p className="text-slate-700 mt-4">{product?.descricao}</p>

            <h2 className="text-lg font-semibold mt-4">Caracteristicas</h2>

            <ul className="list-disc ms-6">
              {product?.caracteristicas?.split(";").map((c) => (
                <li key={c} className="text-slate-700">
                  {c}
                </li>
              ))}
            </ul>

            <Stars
              rating={product?.avaliacaoMedia}
              total={product?.avaliacaoTotal}
            />

            <div className="flex-1 mt-4 flex flex-col-reverse xs:flex-row items-start md:items-end justify-between gap-2">
              <button
                onClick={() => addCart(product?.id)}
                className="px-4 py-1 rounded-md bg-slate-900 text-slate-50 uppercase transition-colors hover:bg-slate-800"
              >
                Adicionar ao carrinho
              </button>

              <strong className="text-xl font-bold">
                R$ {product?.precoFinal}
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-8">
        <h2 className="text-xl text-slate-900 font-semibold uppercase">
          Veja Mais
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
