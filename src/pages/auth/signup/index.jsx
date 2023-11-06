import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    // console.log(data);
  }

  return (
    <main className="p-6 w-full min-h-screen flex justify-center items-center">
      <form className="w-full sm:w-96" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-slate-900 text-center text-xl font-bold uppercase">
          Cadastre-se
        </h1>

        <div className="mt-4">
          <label htmlFor="nome">
            Nome
            <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="nome"
            className="w-full border border-slate-300 rounded-md px-2 py-1 transition-colors focus:border-slate-800 focus:outline-none"
            {...register("nome", { required: "Preencha com seu nome." })}
          />
          {errors?.nome && (
            <span className="block text-red-700">{errors?.nome?.message}</span>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="email">
            E-mail
            <span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-slate-300 rounded-md px-2 py-1 transition-colors focus:border-slate-800 focus:outline-none"
            {...register("email", { required: "Preencha com seu e-mail." })}
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
            Aceitar os termos de uso e política de privacidade.
          </label>
        </div>

        <button
          type="submit"
          className="inline-block w-full text-center mt-4 px-4 py-1 rounded-md bg-slate-900 text-slate-50 uppercase transition-colors hover:bg-slate-800"
        >
          Cadastrar
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
