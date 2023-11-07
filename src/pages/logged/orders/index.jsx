import Order from "../../../components/order";

export default function Orders() {
  return (
    <main className="container mx-auto flex-1 p-6 pb-16">
      <section className="w-full mt-8">
        <h1 className="text-xl text-slate-900 font-semibold uppercase">
          Meus Pedidos
        </h1>

        <div className="mt-4 w-full grid grid-cols-1 ld:grid-cols-2 xl:grid-cols-3 gap-10">
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
        </div>
      </section>
    </main>
  );
}
