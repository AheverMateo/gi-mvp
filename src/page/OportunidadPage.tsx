import * as Accordion from "@radix-ui/react-accordion";
import arrowback from "../assets/ItemsResults/arrowBack.png";
import trash from "../assets/trash.png";
import download from "../assets/Download.png";
import star4 from "../assets/ItemsDashboard/Star4.png";
import frame from "../assets/ItemsDashboard/Frame.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import earth from "../assets/ItemsDashboard/Earth2.png";
import people from "../assets/people4.png";
import ubicacion from "../assets/ItemsDashboard/ubicacion.png";
import date from "../assets/ItemsDashboard/Fecha.png"
import { ChevronDown } from "lucide-react";
import Note from "../components/Note";
const OportunidadPage = () => {
  const prospectos = [
    {
      id: "item-1",
      inicial: "A",
      nombre: "Empresa A nombre de la empresa",
      match: "100%",
      rubro: "turismo",
      pais: "Argentina",
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
          <h1 className="text-[40px] ">Tus Oportunidades</h1>
          <p className="font-light text-lg">
            Guarda tus prospectos seleccionados en un único registro de
            contacto. <br /> Puedes descargarlos a un archivo en Google Sheets o
            CSV.
          </p>
        </header>

        <Accordion.Root className="px-2" type="single" collapsible>
          <div className="flex justify-between border-b pb-4 px-4 border-gray-200">
            <div className="flex items-center gap-5">
              <input className="w-4 h-4" type="checkbox" />
              <span className="text-sm font-albert">Seleccionar todos</span>
            </div>
            <div className="flex gap-5">
              <div className="flex rounded-3xl w-[182px] h-7 gap-2 justify-center items-center  cursor-pointer hover:bg-[#EDFEFF] hover:border border-[#00C5D0]">
                <img className="h-4 w-4" src={download} alt="" />
                <p className="text-sm font-albert">Descargar Archivo</p>
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
              className="mt-10 border rounded-3xl border-gray-200 "
            >
              <Accordion.Trigger className="group w-full px-4  ">
                <div className="flex flex-col pt-3 pb-10 w-full">
                  <div className="flex justify-between w-full pb-2">
                    <input className="w-4 h-4" type="checkbox" />
                    <ChevronDown className="w-6 h-6 text-gray-500 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </div>

                  <div className="px-10 flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium">
                      {prospecto.inicial}
                    </div>
                    <div className="flex flex-col items-start">
                      <h2 className="font-semibold text-left">
                        {prospecto.nombre}
                      </h2>
                      <div className="flex items-center gap-6 mt-2 text-xs text-gray-500">
                        <div className="flex items-center gap-4">
                          <img src={star4} alt="" className="w-[19px] h-[19px]" />
                          <span className="bg-[#EEF2FF] text-[#083287] px-2 py-0.5 rounded-full font-bold">
                            {prospecto.match} Match
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <img src={frame} alt="" className="w-[17px] h-[17px]" />
                          <span className="font-semibold text-xs">
                            {prospecto.rubro}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <img src={ubicacion} alt="" className="w-[10px] h-[17px]" />
                          <span className="font-semibold text-xs">
                            {prospecto.pais}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img src={date} alt="" className="w-[17px] h-[17px]" />
                          <span className="font-semibold text-xs">
                            22/06/2026
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Accordion.Trigger>

              <Accordion.Content className="pb-10">
                <div className=" flex justify-around">
                  <div>
                    <Note />
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
                        <img className="w-[16px] h-[17px]" src={phone} alt="" />
                        <p className="text-sm">001 12345657890</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <img className="w-[17px] h-[12px]" src={email} alt="" />
                        <p className="text-sm">empresa@empresa.com</p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <img className="w-[17px] h-[17px]" src={earth} alt="" />
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
      </div>
    </div>
  );
};

export default OportunidadPage;
