import { Link } from "react-router-dom";
import Category1 from "../../../assets/categorias/image-01.png";
import Category2 from "../../../assets/categorias/image-02.png";
import Category3 from "../../../assets/categorias/image-03.png";
import Category4 from "../../../assets/categorias/image-04.png";

export default function Home() {
  return (
    <main className="flex-1 container mx-auto p-6 pb-16">
      <section className="mt-4">
        <h2 className="text-xl text-slate-900 font-semibold uppercase">
          Categorias
        </h2>

        <div className="mt-4 max-w-4xl mx-auto grid grid-cols-3 md:grid-cols-4 gap-4 sm:gap-12">
          <Link
            to="/"
            className="flex flex-col-reverse items-center max-w-xs mx-auto"
          >
            <h3 className="mt-4 text-xs xs:text-sm md:text-lg text-slate-900 font-medium uppercase">
              Masculina
            </h3>
            <img src={Category1} alt="Masculina" />
          </Link>
          <Link
            to="/"
            className="flex flex-col-reverse items-center max-w-xs mx-auto"
          >
            <h3 className="mt-4 text-xs xs:text-sm md:text-lg text-slate-900 font-medium uppercase">
              Feminina
            </h3>
            <img src={Category2} alt="Feminina" />
          </Link>
          <Link
            to="/"
            className="flex flex-col-reverse items-center max-w-xs mx-auto"
          >
            <h3 className="mt-4 text-xs xs:text-sm md:text-lg text-slate-900 font-medium uppercase">
              Infantil
            </h3>
            <img src={Category3} alt="Infantil" />
          </Link>
          <Link
            to="/"
            className="hidden md:flex flex-col-reverse items-center max-w-xs mx-auto"
          >
            <h3 className="mt-4 text-xs xs:text-sm md:text-lg text-slate-900 font-medium uppercase">
              Acessórios
            </h3>
            <img src={Category4} alt="Acessórios" />
          </Link>
        </div>
      </section>

      <section></section>
    </main>
  );
}
