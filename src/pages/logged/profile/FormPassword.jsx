import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios";
import { ENDPOINTS } from "../../../config/api";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function FormPassword() {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const token = localStorage.getItem("token");
    axios
      .put(ENDPOINTS.putClientPassword(user?.id), data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        toast.success("Senha atualizada.");
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1 lg:col-span-2">
          <label htmlFor="senhaAtual">
            Senha Atual<span className="text-red-700">*</span>
          </label>
          <input
            type="password"
            id="senhaAtual"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("senhaAtual", {
              required: "Preencha com sua senha atual.",
            })}
          />
          {errors?.senhaAtual && (
            <span className="block text-red-700">
              {errors?.senhaAtual?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="senhaNova">
            Nova Senha<span className="text-red-700">*</span>
          </label>
          <input
            type="password"
            id="senhaNova"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("senhaNova", {
              required: "Preencha com sua nova senha.",
            })}
          />

          {errors?.senhaNova && (
            <span className="block text-red-700">
              {errors?.senhaNova?.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="confirmSenha">
            Confirmar Senha<span className="text-red-700">*</span>
          </label>
          <input
            type="password"
            id="confirmSenha"
            className="w-full px-3 py-1 rounded mt-2 bg-slate-200 focus:outline-none"
            {...register("confirmSenha", {
              required: "Preencha com sua nova senha.",
            })}
          />
          {errors?.confirmSenha && (
            <span className="block text-red-700">
              {errors?.confirmSenha?.message}
            </span>
          )}
        </div>
      </div>

      <button className="mt-6 px-4 py-1 rounded bg-slate-900 text-slate-50 uppercase transition-colors hover:bg-slate-800">
        Salvar
      </button>
    </form>
  );
}
