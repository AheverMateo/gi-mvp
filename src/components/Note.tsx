import { useState } from "react";

const Note = () => {
  const [notas, setNotas] = useState<{ texto: string; fecha: string }[]>([]);
  const [inputNota, setInputNota] = useState("");

  const agregarNota = () => {
    const t = inputNota.trim();
    if (!t) return;
    const ahora = new Date();
    const fecha = ahora.toLocaleString("es-AR", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
    setNotas((p) => [...p, { texto: t, fecha }]);
    setInputNota("");
  };
  return (
    <div className="flex flex-col justify-end gap-4 w-[567px] h-full">
      <div className="flex flex-col gap-3">
        {notas.length === 0 ? (
          <div className="bg-[#F5F5F5] rounded-2xl px-5 py-4 min-h-[67px] flex flex-col items-center justify-center text-center">
            <p className="text-sm font-semibold text-gray-500">
              No hay notas registradas aún.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Puedes llevar un registro y seguimiento del contacto.
            </p>
          </div>
        ) : (
          notas.map((nota, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl h-[99px] py-2 px-3 flex flex-col justify-between gap-3"
            >
              <div className="flex items-start justify-between gap-1 ">
                <p className="text-sm font-semibold text-gray-700 mt-1">
                  {nota.texto}
                </p>
                <button
                  onClick={() =>
                    setNotas((p) => p.filter((_, idx) => idx !== i))
                  }
                  className="text-gray-300 hover:text-red-400 transition-colors text-xs flex-shrink-0"
                >
                  ✕
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <span></span> {nota.fecha}
                </span>
                <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  Editar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="bg-[#EEF8F8] rounded-2xl h-[62px] px-4 flex gap-2">
        <input
          type="text"
          value={inputNota}
          onChange={(e) => setInputNota(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && agregarNota()}
          placeholder="Escribe una nueva nota..."
          className="flex-1 text-sm bg-transparent outline-none text-gray-600 placeholder-gray-400"
        />
        {inputNota.trim() && (
          <button
            onClick={agregarNota}
            className="text-[#6C63FF] text-xs font-semibold hover:opacity-70 transition-opacity"
          >
            Agregar
          </button>
        )}
      </div>
    </div>
  );
};

export default Note;

