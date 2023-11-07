import Item from "../../../components/item";

export default function Cart() {
  return (
    <main className="container mx-auto flex-1 p-6 pb-16">
      <section className="w-full mt-8">
        <h1 className="text-xl text-slate-900 font-semibold uppercase">
          Carrinho de Compras
        </h1>
      </section>

      <div className="w-full mt-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>

      <h2 className="text-xl text-slate-900 font-semibold uppercase mt-8">
        Finalizar compra
      </h2>
      <div className="mt-4">
        <h3 className="text-slate-800">
          Total: <strong>R$ 1000</strong>
        </h3>
        <button className="text-center mt-2 px-4 py-1 rounded-md bg-slate-900 text-slate-50 uppercase transition-colors hover:bg-slate-800">
          Finalizar Agora
        </button>
      </div>
    </main>
  );
}
