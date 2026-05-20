import { Link } from "react-router-dom";
import check from "../assets/ItemsDashboard/check.png";
import earth from "../assets/ItemsDashboard/earth.png";
import star from "../assets/ItemsDashboard/star.png";
import Earth2 from "../assets/ItemsDashboard/Earth2.png";
import addPeople from "../assets/ItemsDashboard/addPeople.png";
import foco from "../assets/ItemsDashboard/foco.png";
import ubicacion from "../assets/ItemsDashboard/ubicacion.png";
import star4 from "../assets/ItemsDashboard/star4.png";
import fecha from "../assets/ItemsDashboard/fecha.png";
import frame from "../assets/ItemsDashboard/frame.png";

const DashboardPage = () => {
  const stats = [
    { icon: earth, label: "Prospecciones realizadas", badge: "+1 activa" },
    { icon: check, label: "Resultados", badge: "+15 hoy" },
    { icon: star, label: "Oportunidades seleccionadas", badge: "+2 nuevos" },
  ];

  const opportunities = [
    {
      id: "1",
      candidateName: "Tech Solutions Inc.",
      role: "Desarrollador Frontend",
      location: "Estados Unidos",
      matchScore: 95,
      createdAt: "2026-11-30",
    },
    {
      id: "2",
      candidateName: "Prodatec",
      role: "Turismo",
      location: "Estados Unidos",
      matchScore: 100,
      createdAt: "2026-11-30",
    },
    {
      id: "3",
      candidateName: "Ambimédica SRL",
      role: "Turismo",
      location: "Estados Unidos",
      matchScore: 100,
      createdAt: "2026-11-30",
    },
    {
      id: "4",
      candidateName: "Transplexo",
      role: "Turismo",
      location: "Estados Unidos",
      matchScore: 100,
      createdAt: "2026-11-30",
    },
  ];
  //const opportunities = [];

  const roles = [
    { id: "1", title: "Desarrollador Frontend" },
    { id: "2", title: "Diseñador UX/UI" },
    { id: "3", title: "Diseñador Full stack" },
  ];

  //const roles = [];

  return (
    <div className="bg-mi-gradiente min-h-screen w-full flex flex-col items-center py-36 ">
      <div className="flex flex-col w-242 gap-6">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-[40px] font-albert text-white">
              ¡Hola Gandi User!
            </h1>
            <p className="text-white text-lg">
              Este es el pulso de tus búsquedas autónomas hoy.
            </p>
          </div>
          <button className="bg-blue-900 text-white text-sm px-8 py-3 font-albert rounded-full cursor-pointer hover:bg-blue-800">
            NUEVA BÚSQUEDA
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          {stats.map(({ icon, label, badge }) => (
            <div
              key={label}
              className="flex flex-col bg-white h-39.5 py-5 px-7 rounded-[34px] shadow-md"
            >
              <div className="flex w-full justify-between items-center">
                <span className="bg-[#EDFEFF] p-2 rounded-full">
                  <img src={icon} alt={label} />
                </span>
                <span className="bg-[#f2fcfd] rounded-2xl px-4 font-light text-sm text-[#083287]">
                  {badge}
                </span>
              </div>
              <div className="flex flex-col mt-4">
                <h3 className="text-[#083287] font-bold text-sm">{label}</h3>
                <p className="text-[#083287] font-bold h-10 text-[36px] flex items-center">
                  0
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`bg-white rounded-[35px] p-6 flex flex-col shadow-md ${opportunities.length > 0 ? "h-150" : "h-92.5"}`}
        >
          <div className="flex items-center justify-between border-b pb-4 border-[#F0F0F0]">
            <div>
              <h1 className="text-[#083287] font-bold">
                Oportunidades recientes
              </h1>
              <p className="text-[#083287] text-sm">
                Los mejores candidatos basados en tus búsquedas.
              </p>
            </div>
            {opportunities.length >= 4 && (
              <Link to="/oportunidades" className="text-[#00C5D0] text-sm ">
                Ver todas
              </Link>
            )}
          </div>

          {opportunities.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full py-10">
              <span>
                <img src={Earth2} alt="" />
              </span>
              <p className="text-[#727272]">
                Aun no tienes prospecciones realizadas.
              </p>
              <Link to="" className="text-blue-900 font-bold">
                Inicia tu primera exploración.
              </Link>
            </div>
          ) : (
            <div className="flex flex-col">
              {opportunities.slice(0, 4).map((op, index) => (
                <div
                  key={op.id}
                  className="flex items-center gap-4 py-6 border-b last:border-0 border-[#F0F0F0] rounded-lg px-3 hover:bg-gray-200/60"
                >
                  <span className="w-12 h-12.5 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#727272] font-semibold text-lg">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-black font-bold text-lg">
                      {op.candidateName}
                    </h3>
                    <div className="flex items-center gap-3 text-[12px] text-[#727272]">
                      <div className="flex items-center gap-4">
                        <img src={star4} alt="" className="w-4.6 h-4.6" />
                        <span className="bg-[#EEF2FF] text-[#083287] px-2 py-0.5 rounded-full font-semibold">
                          {op.matchScore}% Match
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <img src={frame} alt="" className="w-4.6 h-4.6" />
                        <span className="font-semibold text-xs">{op.role}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <img src={ubicacion} alt="" className="w-4.6 h-4.6" />
                        <span className="font-semibold text-xs">
                          {op.location}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <img src={fecha} alt="" className="w-4.6 h-4.6" />
                        <span className="font-semibold text-xs">
                          {new Date(op.createdAt).toLocaleDateString("es-AR")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {opportunities.length >= 4 && (
                <Link
                  to="/oportunidades"
                  className="text-[#00C5D0] text-sm flex justify-center items-center -mx-6 -mb-6 py-4 rounded-b-[35px] h-17.5 bg-[#EDFEFF]"
                >
                  Ver todas las Oportunidades
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 h-91.75">
          <div className="bg-white rounded-[35px] p-6 flex flex-col h-91.75">
            <div className="flex justify-between items-center">
            <h1 className="text-[#083287] font-bold">
              Mis Roles / Contexto AI
            </h1>
            {roles.length >= 3 && (
              <Link to="/oportunidades" className="text-[#00C5D0] text-sm ">
                Ver todas
              </Link>
            )}
            </div>
            {roles.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full">
                <span>
                  <img src={addPeople} alt="" />
                </span>
                <p className="text-[#727272]">Aun no tienes roles cargados.</p>
                <Link to="" className="text-blue-900 font-bold cursor-pointer">
                  Agregar tu primer rol.
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-4 mt-5">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className="bg-[#F5F5F5] rounded-2xl py-6 px-3 text-lg hover:bg-gray-200/60"
                  >
                    {role.title}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="bg-blue-900 rounded-[35px] p-7 flex flex-col h-91.75 bg-[radial-gradient(circle_at_top_left,_#5B8AE9,_#1E3A8A_40%)]">
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="bg-white p-2 rounded-full shadow-[-2px_10px_40px_#5B8AE9]">
                  <img src={foco} alt="" />
                </span>
                <h1 className="text-white font-bold">GANDI Insigth</h1>
              </div>
              <p className="text-white font-bold mt-10">
                El Asistente Inteligente de GANDI te conecta con candidatos
                alineados con tu perfil y esto es fundamental para lograr
                conexiones exitosas.
                <span className="block mt-3">
                  ¿Quieres completar tu perfil ahora?
                </span>
              </p>
            </div>
            <button className="bg-[#00C5D0] text-white rounded-[34px] mt-14 px-8 py-3 font-semibold self-start cursor-pointer hover:bg-[#00B0BB]">
              ACEPTAR SUGERENCIA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
