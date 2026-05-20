import gandi from "../assets/GandiBlue.png";
import editWhite from "../assets/editWhite.png";
import UserEdit from "../components/UserEdit";

const UserPage = () => {

  return (
    <div className="bg-mi-gradiente w-full flex flex-col items-center py-36">
      <div className="flex flex-col w-242">
        <div className="flex items-center gap-10">
          <span className="rounded-full bg-blue-900 h-[74px] w-[74px] flex items-center justify-center text-white font-bold">
            MA
          </span>
          <div className="">
            <h1 className="text-white text-[40px]">Nombre y Apellido</h1>
            <p className="text-white">TITULO</p>
          </div>
        </div>

        <div className="flex justify-end">
          <button>
            <img className="cursor-pointer" src={editWhite} alt="" />
          </button>
        </div>

        <div className="flex gap-5 mt-4">
          <div className="flex flex-col gap-6 w-[250px]">
            <div className="bg-white h-[567px] rounded-4xl px-6 shadow-md">
              <UserEdit />
            </div>

            <div className="flex flex-col justify-between p-6 h-[322px] bg-blue-900 rounded-[35px] bg-[radial-gradient(circle_at_top_left,_#5B8AE9,_#1E3A8A_30%)] ">
              <div className="flex items-center gap-4">
                <span className="w-[45px] h-[47px] flex justify-center items-center bg-white rounded-full">
                  <img src={gandi} alt="GANDI" />
                </span>
                <h1 className="font-bold text-white">Contexto IA</h1>
              </div>
              <p className="text-white text-lg">
                ¿Quieres que GANDI revise y sugiera cambios en tu perfil?
              </p>
              <button className="bg-[#00C5D0] w-[155px] h-[47px] self-center text-white rounded-[34px] font-semibold cursor-pointer hover:bg-[#00B0BB]">
                Ejecutar
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 bg-white w-[694px] rounded-4xl py-8 shadow-md px-6">
            <div className="flex flex-col border border-[#D9D9D9] rounded-3xl p-6 gap-5">
              <h1 className="font-bold text-[#083287] text-[18px]">
                Presentación
              </h1>

              <div className="bg-[#FBF9F9] rounded-2xl h-[90px] flex items-center justify-center px-10">
                <p className="text-[#8A8A8A] text-sm text-center leading-5 max-w-[480px]">
                  Aun no tienes tu presentación cargada. Cuéntale al mundo quién
                  eres para mejorar tus resultados.
                </p>
              </div>
            </div>

            <div className="flex flex-col border border-[#D9D9D9] rounded-3xl p-6 gap-5">
              <h1 className="font-bold text-[#083287] text-[18px]">
                Servicios
              </h1>

              <div className="bg-[#FBF9F9] rounded-2xl h-[52px] flex items-center justify-center px-10">
                <p className="text-[#8A8A8A] text-sm text-center leading-5">
                  Completa tu oferta de servicios profesionales.
                </p>
              </div>
            </div>

            <div className="flex flex-col border border-[#D9D9D9] rounded-3xl p-6 gap-5">
              <h1 className="font-bold text-[#083287] text-[18px]">
                Habilidades
              </h1>

              <div className="bg-[#FBF9F9] rounded-2xl h-[50px] flex items-center justify-center px-10">
                <p className="text-[#8A8A8A] text-sm text-center leading-4">
                  Tus “Hard Skills” (conocimientos, tecnologías, lenguajes,
                  procesos, instrumentos, etc.)
                </p>
              </div>
            </div>

            {/* SOFT SKILLS */}
            <div className="flex flex-col border border-[#D9D9D9] rounded-3xl p-6 gap-5">
              <h1 className="font-bold text-[#083287] text-[18px]">
                Otras capacidades
              </h1>

              <div className="bg-[#FBF9F9] rounded-2xl h-[57px] flex items-center justify-center px-10">
                <p className="text-[#8A8A8A] text-sm text-center leading-5">
                  Tus “Soft Skills” (trabajo en equipo, liderazgo,
                  adaptabilidad, disponibilidad, etc.)
                </p>
              </div>
            </div>

            {/* EDUCACIÓN */}
            <div className="flex flex-col border border-[#D9D9D9] rounded-3xl p-6 gap-5">
              <h1 className="font-bold text-[#083287] text-[18px]">
                Educación
              </h1>

              <div className="bg-[#FBF9F9] rounded-2xl h-[57px] flex items-center justify-center px-10">
                <p className="text-[#8A8A8A] text-sm text-center leading-5">
                  Formación, títulos profesionales, reconocimientos.
                </p>
              </div>
            </div>

            {/* DESEMPEÑO */}
            <div className="flex flex-col border border-[#D9D9D9] rounded-3xl p-6 gap-5">
              <h1 className="font-bold text-[#083287] text-[18px]">
                Desempeño
              </h1>

              <div className="bg-[#FBF9F9] rounded-2xl h-[55px] flex items-center justify-center px-10">
                <p className="text-[#8A8A8A] text-sm text-center leading-5 font-normal">
                  Principales logros laborales, para quién has trabajado,
                  trayectoria profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
