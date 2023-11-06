import Stars from "../../../components/stars";
import productImage from "../../../assets/imagens/image-01.jpg";
import Card from "../../../components/card";

export default function Product() {
  return (
    <main className="container mx-auto p-6 pb-16 flex-1">
      <section className="w-full mt-8">
        <div className="flex flex-col md:flex-row justify-stretch border border-slate-400 rounded-md overflow-hidden">
          <img
            src={productImage}
            alt="Blusa Verde Masculina"
            className="w-full md:w-72 lg:w-96 object-cover object-center"
          />
          <div className="flex flex-col flex-1 p-6">
            <h1 className="text-lg xl:text-xl font-bold">
              Blusa Verde Masculina
            </h1>
            <p className="text-slate-700 mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              hic doloremque at libero? Maxime harum iure unde ullam, accusamus
              dignissimos debitis molestias, error quisquam eum magnam natus
              necessitatibus. Numquam, illum.
            </p>

            <h2 className="text-lg font-semibold mt-4">Caracteristicas</h2>

            <ul className="list-disc ms-6">
              <li className="text-slate-700">Cores: Azul, Verde, Amarelo</li>
              <li className="text-slate-700">Tamanhos: P, M, G, GG</li>
              <li className="text-slate-700">Frete Grátis</li>
            </ul>

            <Stars rating={4.5} total={330} />

            <div className="flex-1 mt-4 flex flex-col-reverse xs:flex-row items-start md:items-end justify-between gap-2">
              <button className="px-4 py-1 rounded-md bg-slate-900 text-slate-50 uppercase transition-colors hover:bg-slate-800">
                Adicionar ao carrinho
              </button>

              <strong className="text-xl font-bold">R$ 199</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-8">
        <h2 className="text-xl text-slate-900 font-semibold uppercase">
          Veja Mais
        </h2>

        <div className="w-full mt-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </main>
  );
}
