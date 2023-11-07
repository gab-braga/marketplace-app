export default function Modal({
  title,
  message,
  handleSubmit,
  handleClose,
  children,
}) {
  return (
    <div className="fixed left-0 top-0 w-screen h-screen flex items-start justify-center">
      <div className="absolute left-0 top-0 w-screen h-screen bg-slate-900 opacity-70 flex items-center justify-center z-40"></div>
      <div className="w-full sm:w-96 bg-slate-100 m-4 mt-8 p-4 rounded-md flex flex-col gap-2 items-center justify-center opacity-100 z-50">
        <strong className="text-slate-800">{title}</strong>
        {message != null && <span>{message}</span>}
        {children == null ? (
          <div className="flex gap-2">
            <button
              onClick={handleClose}
              className="text-center mt-4 px-4 py-1 rounded-md bg-slate-900 text-slate-50 uppercase transition-colors hover:bg-slate-800"
            >
              Cancelar
            </button>
            <button
              onClick={handleSubmit}
              className="text-center mt-4 px-4 py-1 rounded-md bg-slate-50 text-slate-900 border border-slate-800 uppercase transition-colors hover:bg-slate-800 hover:text-slate-50"
            >
              Ok
            </button>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
