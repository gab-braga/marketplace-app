import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios";
import { ENDPOINTS } from "../../../config/api";
import toast from "react-hot-toast";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  function onSubmit(data) {
    const { email, senha } = data;
    axios
      .post(ENDPOINTS.postLogin(), { email, senha })
      .then(({ data }) => {
        const { token } = data;
        login(token);
        navigate("/");
        toast.success("Bem-vindo(a).");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Erro ao autenticar.");
      });
  }

  return (
    <main className="p-6 w-full min-h-screen flex justify-center items-center">
      <form className="w-full sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-slate-900 text-center text-xl font-bold uppercase">
          Login
        </h1>

        <div className="mt-4">
          <label htmlFor="email">
            E-mail
            <span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-slate-300 rounded-md px-2 py-1 transition-colors focus:border-slate-800 focus:outline-none"
            {...register("email", { required: "Preencha com seu email." })}
          />
          {errors?.email && (
            <span className="block text-red-700">{errors?.email?.message}</span>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="senha">
            Senha
            <span className="text-red-700">*</span>
          </label>
          <input
            type="password"
            id="senha"
            className="w-full border border-slate-300 rounded-md px-2 py-1 transition-colors focus:border-slate-800 focus:outline-none"
            {...register("senha", { required: "Preencha com sua senha." })}
          />
          {errors?.senha && (
            <span className="block text-red-700">{errors?.senha?.message}</span>
          )}
        </div>

        <div className="mt-4">
          <input type="checkbox" id="logado" className="focus:outline-none" />
          <label htmlFor="logado" className="ms-2">
            Manter-me logado.
          </label>
        </div>

        <button
          type="submit"
          className="inline-block w-full text-center mt-4 px-4 py-1 rounded-md bg-slate-900 text-slate-50 uppercase transition-colors hover:bg-slate-800"
        >
          Entrar
        </button>

        <Link
          to="/"
          className="inline-block w-full text-center mt-4 px-4 py-1 rounded-md bg-slate-50 text-slate-900 uppercase border border-slate-900 transition-colors hover:bg-slate-900 hover:text-slate-50"
        >
          Voltar para home
        </Link>
      </form>
    </main>
  );
}
