import Card from "../../../components/card";

export default function Search() {
  return (
    <main className="container mx-auto p-6 pb-16 flex-1">
      <section className="w-full mt-8">
        <h2 className="text-xl text-slate-900 font-semibold uppercase">
          Resultados da busca
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
