import axios from "axios";
import { useForm } from "react-hook-form";
import { ENDPOINTS } from "../../../config/api";
import toast from "react-hot-toast";

export default function FormProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function getFileBase64(file, callback) {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base36File = e.target.result;
        callback(base36File);
      };
      reader.readAsDataURL(file);
    }
  }

  function onSubmit(data) {
    const file = data.foto[0];
    getFileBase64(file, (foto) => {
      const { nome, descricao, preco, caracteristicas, categoria, quantidade } =
        data;
      const token = localStorage.getItem("token");
      axios
        .post(
          ENDPOINTS.postAdminProduct(),
          {
            nome,
            descricao,
            preco,
            caracteristicas,
            categoria,
            quantidade,
            foto,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => {
          toast.success("Produto adicionado.");
        });
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-slate-800">
            Nome
            <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="nome"
            className="w-full px-3 py-1 rounded bg-slate-200 focus:outline-none"
            {...register("nome", {
              required: "Preencha com o nome do produto.",
            })}
          />
          {errors?.nome && (
            <span className="block text-red-700">{errors?.nome?.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="text-slate-800">
            Descrição
            <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="descricao"
            className="w-full px-3 py-1 rounded bg-slate-200 focus:outline-none"
            {...register("descricao", {
              required: "Preencha com a descrição do produto.",
            })}
          />
          {errors?.descricao && (
            <span className="block text-red-700">
              {errors?.descricao?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco" className="text-slate-800">
            Preço (R$)
            <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="preco"
            className="w-full px-3 py-1 rounded bg-slate-200 focus:outline-none"
            {...register("preco", {
              required: "Preencha com o preço do produto.",
            })}
          />
          {errors?.preco && (
            <span className="block text-red-700">{errors?.preco?.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="quantidade" className="text-slate-800">
            Quantidade Inicial
            <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="quantidade"
            className="w-full px-3 py-1 rounded bg-slate-200 focus:outline-none"
            {...register("quantidade", {
              required: "Preencha com a quantidade do produto.",
            })}
          />
          {errors?.quantidade && (
            <span className="block text-red-700">
              {errors?.quantidade?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="caracteristicas" className="text-slate-800">
            Características
            <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="caracteristicas"
            className="w-full px-3 py-1 rounded bg-slate-200 focus:outline-none"
            {...register("caracteristicas", {
              required: "Preencha com as características do produto.",
            })}
          />
          {errors?.caracteristicas && (
            <span className="block text-red-700">
              {errors?.caracteristicas?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="categoria" className="text-slate-800">
            Categorias
            <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="categoria"
            className="w-full px-3 py-1 rounded bg-slate-200 focus:outline-none"
            {...register("categoria", {
              required: "Preencha com as categorias do produto.",
            })}
          />
          {errors?.categoria && (
            <span className="block text-red-700">
              {errors?.categoria?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="foto" className="text-slate-800">
            Foto
            <span className="text-red-700">*</span>
          </label>
          <input
            type="file"
            id="foto"
            className="w-full px-3 py-1 rounded bg-slate-200 focus:outline-none"
            {...register("foto", {
              required: "Preencha com o foto do produto.",
            })}
          />
          {errors?.foto && (
            <span className="block text-red-700">{errors?.foto?.message}</span>
          )}
        </div>
      </div>

      <button className="mt-6 px-4 py-1 rounded bg-slate-900 text-slate-50 uppercase transition-colors hover:bg-slate-800">
        Adicionar
      </button>
    </form>
  );
}
