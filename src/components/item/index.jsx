export default function Item() {
  return (
    <div className="flex items-center border border-slate-400 rounded-md overflow-hidden">
      <img
        src=""
        alt=""
        className="w-32 h-full xs:w-40 object-cover object-center"
      />
      <div className="h-full flex-1 p-4">
        <h3 className="text-slate-900 font-semibold">Nome do item</h3>
        <div className="mt-2">
          <label htmlFor="qnt">Quantidade</label>
          <div className="flex gap-2">
            <button className="w-6 h-6 rounded text-slate-800 border border-slate-800">
              -
            </button>
            <input
              type="number"
              id="qnt"
              className="bg-slate-200 rounedd w-16 px-2"
            />
            <button className="w-6 h-6 rounded text-slate-800 border border-slate-800">
              +
            </button>
          </div>
        </div>

        <span className="inline-block text-slate-500 mt-2">
          Total:{" "}
          <strong className="text-slate-800 font-bold text-lg ms-2">
            R$ 200
          </strong>
        </span>
      </div>
    </div>
  );
}
