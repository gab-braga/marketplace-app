import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios";
import { ENDPOINTS } from "../../../config/api";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function FormUser() {
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
      .get(ENDPOINTS.getClientProfile(user?.id), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        const { nome, email, dataNascimento, cpf } = data;
        reset({
          nome,
          email,
          dataNascimento: new Date(dataNascimento).toISOString().slice(0, 10),
          cpf,
        });
      });
  }, []);

  function onSubmit(data) {
    const token = localStorage.getItem("token");
    axios
      .put(ENDPOINTS.putClientProfile(user?.id), data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Dados pessoais atualizados.");
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="nome">
            Nome<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="nome"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("nome", { required: "Preencha com seu nome." })}
          />
          {errors?.nome && (
            <span className="block text-red-700">{errors?.nome?.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">
            E-mail<span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("email", { required: "Preencha com seu e-mail." })}
          />

          {errors?.email && (
            <span className="block text-red-700">{errors?.email?.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="dataNascimento">
            Data de Nascimento<span className="text-red-700">*</span>
          </label>
          <input
            type="date"
            id="dataNascimento"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("dataNascimento", {
              required: "Preencha com sua data de nascimento.",
            })}
          />
          {errors?.dataNascimento && (
            <span className="block text-red-700">
              {errors?.dataNascimento?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="cpf">
            CPF<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="cpf"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("cpf", { required: "Preencha com seu cpf." })}
          />
          {errors?.cpf && (
            <span className="block text-red-700">{errors?.cpf?.message}</span>
          )}
        </div>
      </div>

      <button className="mt-6 px-4 py-1 rounded bg-slate-900 text-slate-50 uppercase transition-colors hover:bg-slate-800">
        Salvar
      </button>
    </form>
  );
}
