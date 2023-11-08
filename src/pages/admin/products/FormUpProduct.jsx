import axios from "axios";
import { useForm } from "react-hook-form";
import { ENDPOINTS } from "../../../config/api";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export default function FormUpProduct({ produtoId, handleClose }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const [photoProduct, setPhotoProduct] = useState(null);
  const photoSelected = watch("foto");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(ENDPOINTS.getAdminProduct(produtoId), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setPhotoProduct(data?.foto);
        delete data.foto;
        reset(data);
      });
  }, []);

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
    const send = (foto = null) => {
      const {
        nome,
        descricao,
        preco,
        desconto,
        caracteristicas,
        categoria,
        quantidade,
      } = data;
      const token = localStorage.getItem("token");
      axios
        .put(
          ENDPOINTS.putAdminProduct(produtoId),
          {
            nome,
            descricao,
            preco,
            desconto,
            caracteristicas,
            categoria,
            quantidade,
            foto: foto || photoProduct,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(() => {
          toast.success("Produto atualizado.");
          handleClose();
        });
    };
    if (photoSelected) {
      getFileBase64(file, send);
    } else {
      send();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full mt-6 flex flex-col gap-4">
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
          <label htmlFor="desconto" className="text-slate-800">
            Desconto (R$)
            <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="desconto"
            className="w-full px-3 py-1 rounded bg-slate-200 focus:outline-none"
            {...register("desconto", {
              required: "Preencha com o desconto do produto.",
            })}
          />
          {errors?.desconto && (
            <span className="block text-red-700">
              {errors?.desconto?.message}
            </span>
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
          </label>
          <input
            type="file"
            id="foto"
            className="w-full px-3 py-1 rounded bg-slate-200 focus:outline-none"
            {...register("foto")}
          />
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <button className="px-4 py-1 rounded bg-slate-900 text-slate-50 uppercase transition-colors hover:bg-slate-800">
          Editar
        </button>
        <button
          onClick={handleClose}
          className="px-4 py-1 rounded bg-slate-50 text-slate-900 border border-slate-800 uppercase transition-colors hover:bg-slate-800 hover:text-slate-50"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}
