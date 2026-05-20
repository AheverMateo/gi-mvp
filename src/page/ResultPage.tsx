import * as Accordion from "@radix-ui/react-accordion";
import arrowback from "../assets/ItemsResults/arrowBack.png";
import star4 from "../assets/ItemsDashboard/Star4.png";
import frame from "../assets/ItemsDashboard/Frame.png";
import ubicacion from "../assets/ItemsDashboard/ubicacion.png";
import starWhite from "../assets/Star-white.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import earth from "../assets/ItemsDashboard/Earth2.png";
import people from "../assets/people4.png";
import trash from "../assets/trash.png"
import star from "../assets/ItemsDashboard/star.png"
import { ChevronDown } from "lucide-react";
const ResultPage = () => {
  const prospectos = [
    {
      id: "item-1",
      inicial: "A",
      nombre: "Empresa A nombre de la empresa",
      match: "100%",
      rubro: "turismo",
      pais: "Argentina",
    },
    {
      id: "item-2",
      inicial: "B",
      nombre: "Empresa B nombre de la empresa",
      match: "90%",
      rubro: "tecnología",
      pais: "Chile",
    },
    {
      id: "item-3",
      inicial: "C",
      nombre: "Empresa C nombre de la empresa",
      match: "85%",
      rubro: "salud",
      pais: "Uruguay",
    },
    {
      id: "item-4",
      inicial: "D",
      nombre: "Empresa D nombre de la empresa",
      match: "78%",
      rubro: "educación",
      pais: "Brasil",
    },
  ];
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-20">
      <div className="flex flex-col w-242 gap-6">
        <div className="flex items-center gap-2 mb-4 ">
          <img className="w-5 h-2" src={arrowback} alt="" />
          <button className="text-sm">Volver</button>
        </div>
        <header className="">
          <h1 className="text-[40px] ">Resultados de la búsqueda</h1>
          <p className="font-light text-lg">
            Prospectos encontrados según tus parámetros. Puedes obtener la
            información disponible <br /> del contacto y guardar los que más te
            interesen en tu propio registro de seguimiento.
          </p>
        </header>
        <section>
          <Accordion.Root className="px-2" type="single" collapsible>
            <div className="flex justify-between border-b pb-4 px-4 border-gray-200">
              <div className="flex items-center gap-5">
                <input className="w-4 h-4" type="checkbox" />
                <span className="text-sm font-albert">Seleccionar todos</span>
              </div>
              <div className="flex gap-5">
                <div className="flex rounded-3xl w-[109px] h-7 gap-2 justify-center items-center  cursor-pointer hover:bg-[#EDFEFF] hover:border border-[#00C5D0]">
                    <img className="h-4 w-4" src={star} alt="" />
                    <p className="text-sm font-albert">Guardar</p>
                </div>
                <div className="flex rounded-3xl w-[109px] h-7 gap-2 justify-center items-center  cursor-pointer hover:bg-[#EDFEFF] hover:border border-[#00C5D0]">
                    <img className="w-[13px] h-4" src={trash} alt="" />
                    <p className="text-sm font-albert">Eliminar</p>
                </div>
              </div>
            </div>

            {prospectos.map((prospecto) => (
              <Accordion.Item
                key={prospecto.id}
                value={prospecto.id}
                className="border-b border-gray-200 data-[state=open]:border-b-0 data-[state=open]:bg-[#EDFEFF] ">
                <Accordion.Trigger className="group w-full px-4 ">
                  <div className="flex flex-col pt-3 pb-10 w-full">
                    <div className="flex justify-between w-full pb-2">
                      <input className="w-4 h-4" type="checkbox" />
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-500 group-data-[state=open]:hidden">
                          Abrir contacto
                        </span>
                        <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                      </div>
                    </div>

                    <div className="px-10 flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">
                        {prospecto.inicial}
                      </div>
                      <div className="flex flex-col items-start">
                        <h2 className="font-semibold text-left">
                          {prospecto.nombre}
                        </h2>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <div className="flex items-center gap-4">
                            <img src={star4} alt="" className="w-4.6 h-4.6" />
                            <span className="bg-[#EEF2FF] text-[#083287] px-2 py-0.5 rounded-full font-semibold">
                              {prospecto.match} Match
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <img src={frame} alt="" className="w-4.6 h-4.6" />
                            <span className="font-semibold text-xs">
                              {prospecto.rubro}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <img
                              src={ubicacion}
                              alt=""
                              className="w-4.6 h-4.6"
                            />
                            <span className="font-semibold text-xs">
                              {prospecto.pais}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Trigger>

                <Accordion.Content className="bg-[#EDFEFF] border-b border-gray-200 pb-10">
                  <div className=" flex justify-around">
                    <div className="flex flex-col justify-end ">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[#727272] font-semibold text-sm">
                          Convierte este prospecto en Oportunidad:
                        </p>

                        <button className="flex items-center gap-2 justify-center bg-cyan-500 hover:bg-cyan-600 transition font-semibold text-white w-[178px] h-[47px] rounded-full text-sm">
                          <img src={starWhite} alt="" />
                          GUARDAR
                        </button>
                      </div>
                    </div>

                    <div className="w-[320px] border-l border-gray-300 pl-8 -mt-[84px]">
                      <h3 className="text-xs text-[#727272] font-semibold mb-5">
                        INFORMACIÓN DE CONTACTO
                      </h3>

                      <div className="space-y-6 text-sm text-gray-700">
                        <div className="flex items-center gap-3">
                          <img src={ubicacion} alt="" className="w-4.6 h-4.6" />
                          <p className="text-sm">Dirección...</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <img
                            className="w-[16px] h-[17px]"
                            src={phone}
                            alt=""
                          />
                          <p className="text-sm">001 12345657890</p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <img
                            className="w-[17px] h-[12px]"
                            src={email}
                            alt=""
                          />
                          <p className="text-sm">empresa@empresa.com</p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <img
                            className="w-[17px] h-[17px]"
                            src={earth}
                            alt=""
                          />
                          <p className="text-sm">https://www.empresa.com</p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <img
                            className="w-[14px] h-[17px]"
                            src={people}
                            alt=""
                          />
                          <p className="text-sm">
                            Juan Carlos Pepe <br /> Director de Marketing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </section>
      </div>
    </div>
  );
};

export default ResultPage;
