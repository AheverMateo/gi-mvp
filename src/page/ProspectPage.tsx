import earth from "../assets/ItemsDashboard/earth.png";
import location from "../assets/ItemsDashboard/ubicacion.png";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
const ProspectPage = () => {
  const [tipoBusqueda, setTipoBusqueda] = useState("");
  const [paisSeleccionado, setPaisSeleccionado] = useState("");
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState("");
  const [idiomaSeleccionado, setIdiomaSeleccionado] = useState("");

  const busqueda = [
    "Oficinas y negocios locales",
    "Pymes",
    "Corporaciones, alta gerencia",
    "E-commerce",
    "startups",
    "agencias de marketing",
    "Ofertas de empleo",
  ];

  const paises = [
    "Argentina",
    "México",
    "España",
    "Colombia",
    "Chile",
    "Uruguay",
    "Perú",
  ];
  const idiomas = ["Español", "English", "Português", "Français", "Deutsch"];

  const empresas = [
    "Direccion",
    "Gerencia",
    "RR.HH.",
    "Marketing",
    "Administración",
    "Logística",
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-36">
      <div className="flex flex-col w-242 gap-6">
        <header className="">
          <h1 className="text-[40px] font-albert ">Explora Empresas</h1>
          <p className="font-light text-lg font-albert ">
            GANDI busca candidatos que se ajustan a tu perfil. Indícale tu
            objetivo y <br /> automáticamente traerá prospectos de tu interés.
          </p>
        </header>
        <div className="flex justify-end gap-10">
          <div className="flex items-center gap-2">
            <div className="size-5 rounded-full bg-radial-[at_center] from-cyan-200 via-cyan-400 to-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
            <span className="text-sm font-albert">Buscando activamente...</span>
          </div>
          <div className="flex items-center gap-2 ">
            <div className="size-5 rounded-full bg-radial-[at_center] from-pink-200 via-fuchsia-600 to-purple-700 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
            <span className="text-sm font-albert">Borrar/ Nueva búsqueda</span>
          </div>
        </div>

        <section className="flex flex-col border-[#D9D9D9] border-b pb-6">
          <div className="flex items-center rounded-[34px] gap-4 px-5 h-[68px] border bg-[#EDFEFF] border-[#D9D9D9] ">
            <span className="bg-cyan-100/50 rounded-full p-2">
              <img className="w-[23px] h-[23px]" src={earth} alt="" />
            </span>
            <h2 className="text-lg font-bold">
              Título: (ej: Empresas pyme de turismo receptivo en USA)
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="max-w-3xl mx-auto">
              <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-8">
                <div className="flex gap-4 items-center ">
                  <span className="bg-[#F5F5F5] w-11 h-12 flex justify-center items-center rounded-full">
                    <img src={earth} alt="" />
                  </span>
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <button className="flex flex-col flex-1 text-left outline-none">
                        <label className="font-bold text-[#727272] text-[13px] cursor-pointer">
                          TIPO DE BÚSQUEDA
                        </label>

                        <span
                          className={`w-full border-b border-dotted border-black text-[15px] ${
                            tipoBusqueda
                              ? "font-bold text-black"
                              : "text-[#9A9A9A]"
                          }`}
                        >
                          {tipoBusqueda ||
                            "(ej.: Negocios, Pymes, Startups, etc.)"}
                        </span>
                      </button>
                    </Popover.Trigger>

                    <Popover.Portal>
                      <Popover.Content
                        sideOffset={1}
                        align="start"
                        className="w-[280px] rounded-b-[38px] bg-[#EAF8FA] px-6 py-3 shadow-md"
                      >
                        <ul className="flex flex-col list-disc pl-4">
                          {busqueda.map((item) => (
                            <li
                              key={item}
                              className="text-[15px] cursor-pointer"
                              onClick={() => setTipoBusqueda(item)}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </div>

                <div className="flex gap-4 items-center ">
                  <span className="bg-[#F5F5F5] w-11 h-12 flex justify-center items-center rounded-full">
                    <img src={location} alt="" />
                  </span>
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <button className="flex flex-col flex-1 text-left outline-none">
                        <label className="font-bold text-[#727272] text-[13px] cursor-pointer">
                          UBICACIÓN
                        </label>

                        <span
                          className={`w-full border-b border-dotted border-black text-[15px] ${
                            paisSeleccionado
                              ? "font-bold text-black"
                              : "text-[#9A9A9A]"
                          }`}
                        >
                          {paisSeleccionado || "(elige País)"}
                        </span>
                      </button>
                    </Popover.Trigger>

                    <Popover.Portal>
                      <Popover.Content
                        sideOffset={1}
                        align="start"
                        className="w-[280px] rounded-b-[38px] bg-[#EAF8FA] px-6 py-3 shadow-md"
                      >
                        <ul className="flex flex-col list-disc pl-4">
                          {paises.map((item) => (
                            <li
                              key={item}
                              className="text-[15px] cursor-pointer"
                              onClick={() => setPaisSeleccionado(item)}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </div>

                <div className="flex gap-4 justify-center">
                  <span className="bg-[#F5F5F5] rounded-full w-11 h-12 flex items-center justify-center">
                    <img className="h-[22px] w-[19px]" src={earth} alt="" />
                  </span>
                  <div className="flex-1">
                    <label className="font-bold text-[#727272] text-[13px] cursor-pointer">
                      INDUSTRIA/S PREFERENTES
                    </label>
                    <input
                      type="text"
                      placeholder="(escribe y presiona Enter)"
                      className="w-[280px] text-[15px] border-b border-dotted border-black outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-4 items-center ">
                  <span className="bg-[#F5F5F5] w-11 h-12 flex justify-center items-center rounded-full">
                    <img src={location} alt="" />
                  </span>
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <button className="flex flex-col flex-1 text-left outline-none">
                        <label className="font-bold text-[#727272] text-[13px] cursor-pointer">
                          AREA DE LA EMPRESA
                        </label>

                        <span
                          className={`w-full border-b border-dotted border-black text-[15px] ${
                            empresaSeleccionada
                              ? "font-bold text-black"
                              : "text-[#9A9A9A]"
                          }`}
                        >
                          {empresaSeleccionada ||
                            "(ej.: Dirección, Gerencia, RR.HH., etc.)"}
                        </span>
                      </button>
                    </Popover.Trigger>

                    <Popover.Portal>
                      <Popover.Content
                        sideOffset={1}
                        align="start"
                        className="w-[280px] rounded-b-[38px] bg-[#EAF8FA] px-6 py-3 shadow-md"
                      >
                        <ul className="flex flex-col list-disc pl-4">
                          {empresas.map((item) => (
                            <li
                              key={item}
                              className="text-[15px] cursor-pointer"
                              onClick={() => setEmpresaSeleccionada(item)}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </div>
                <div className="flex gap-4 items-center ">
                  <span className="bg-[#F5F5F5] w-11 h-12 flex justify-center items-center rounded-full">
                    <img src={location} alt="" />
                  </span>
                  <Popover.Root>
                    <Popover.Trigger asChild>
                      <button className="flex flex-col flex-1 text-left outline-none">
                        <label className="font-bold text-[#727272] text-[13px] cursor-pointer">
                          IDIOMA
                        </label>

                        <span
                          className={`w-full border-b border-dotted border-black text-[15px] ${
                            idiomaSeleccionado
                              ? "font-bold text-black"
                              : "text-[#9A9A9A]"
                          }`}
                        >
                          {idiomaSeleccionado ||
                            "(elige el idioma de tu preferencia)"}
                        </span>
                      </button>
                    </Popover.Trigger>

                    <Popover.Portal>
                      <Popover.Content
                        sideOffset={1}
                        align="start"
                        className="w-[280px] rounded-b-[38px] bg-[#EAF8FA] px-6 py-3 shadow-md"
                      >
                        <ul className="flex flex-col list-disc pl-4">
                          {idiomas.map((item) => (
                            <li
                              key={item}
                              className="text-[15px] cursor-pointer"
                              onClick={() => setIdiomaSeleccionado(item)}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Popover.Content>
                    </Popover.Portal>
                  </Popover.Root>
                </div>

                <div className="flex gap-4 justify-center">
                  <span className="bg-[#F5F5F5] rounded-full w-11 h-12 flex items-center justify-center">
                    <img className="h-[22px] w-[19px]" src={earth} alt="" />
                  </span>
                  <div className="flex-1">
                    <label className="font-bold text-[#727272] text-[13px] cursor-pointer">
                      PALABRAS CLAVE
                    </label>
                    <input
                      type="text"
                      placeholder="(escribe y presiona Enter)"
                      className="w-[280px] text-[15px] border-b border-dotted border-black outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProspectPage;
