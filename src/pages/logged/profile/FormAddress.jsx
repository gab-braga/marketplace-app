import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios";
import { ENDPOINTS } from "../../../config/api";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function FormAddress() {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(ENDPOINTS.getClientAddress(user?.id), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        const { logradouro, numero, cidade, uf, cep, complemento } = data;
        reset({
          logradouro,
          numero,
          cidade,
          uf,
          cep,
          complemento,
        });
      });
  }, []);

  function onSubmit(data) {
    const token = localStorage.getItem("token");
    axios
      .put(ENDPOINTS.putClientAddress(user?.id), data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Dados de endereço atualizados.");
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="logradouro">
            Logradouro<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="logradouro"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("logradouro", {
              required: "Preencha com seu logradouro.",
            })}
          />
          {errors?.logradouro && (
            <span className="block text-red-700">
              {errors?.logradouro?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="numero">
            Número<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="numero"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("numero", {
              required: "Preencha com seu número de residência.",
            })}
          />
          {errors?.numero && (
            <span className="block text-red-700">
              {errors?.numero?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="dataNasc">
            Cidade<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="cidade"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("cidade", {
              required: "Preencha com sua cidade.",
            })}
          />
          {errors?.cidade && (
            <span className="block text-red-700">
              {errors?.cidade?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="uf">
            UF<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="uf"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("uf", { required: "Preencha com sua uf." })}
          />
          {errors?.uf && (
            <span className="block text-red-700">{errors?.uf?.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="cep">
            CEP<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="cep"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("cep", { required: "Preencha com seu cep." })}
          />
          {errors?.cep && (
            <span className="block text-red-700">{errors?.cep?.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="complemento">Complemento</label>
          <input
            type="text"
            id="complemento"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("complemento")}
          />
        </div>
      </div>

      <button className="mt-6 px-4 py-1 rounded bg-slate-900 text-slate-50 uppercase transition-colors hover:bg-slate-800">
        Salvar
      </button>
    </form>
  );
}
