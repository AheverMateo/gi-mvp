import userAdd from "../assets/peopleSVG.svg";
import UserRolModal from "../components/UserRolModal";
import { useState } from "react";

export interface Role {
  title: string;
  skills: string[];
  projects: string[];
}

const UserRol = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [roles, setRoles] = useState<Role[]>([]);

  return (
    <div className="bg-mi-gradiente h-full w-full flex flex-col items-center py-36">
      <div className="flex flex-col w-245">
        <div className="flex items-center gap-12">
          <div className="">
            <h1 className="text-[40px] text-white">Mis Roles</h1>
            <p className="text-lg text-white font-albert">
              Si además de tu actividad principal, operas en otras funciones
              (por ejemplo: productor, técnico,
              <br /> coordinador, asesor, emprendedor, etc.), agrégalos para
              focalizar mejor tus búsquedas.
            </p>
          </div>
          <button
            className="rounded-full mt-10 cursor-pointer text-white text-sm bg-[#083287] h-[47px] w-[137px] flex items-center justify-center"
            onClick={() => setOpenModal(true)}
          >
            + NUEVO ROL
          </button>
        </div>

        <div className="mt-10">
          {roles.length === 0 ? (
            <div className="flex justify-center">
              <div className="flex flex-col justify-center items-center w-[473px] h-[268px] border border-white rounded-3xl">
                <img src={userAdd} alt="Agregar rol" />

                <h1 className="text-white text-lg">
                  Aún no tienes Roles cargados.
                </h1>

                <button
                  onClick={() => setOpenModal(true)}
                  className="
            text-lg
            text-[#083287]
            font-bold
            cursor-pointer
          "
                >
                  Agrega un nuevo rol.
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="
            bg-white
            rounded-3xl
            p-6
            flex
            flex-col
            gap-4
          "
                >
                  <h2 className="text-2xl font-bold text-[#083287]">
                    {role.title}
                  </h2>

                  <div>
                    <p className="font-semibold">Habilidades</p>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {role.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="
                    bg-[#DDF3F5]
                    px-3
                    py-1
                    rounded-full
                    text-sm
                  "
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-semibold">Proyectos</p>

                    <ul className="list-disc pl-5 mt-2">
                      {role.projects.map((project, i) => (
                        <li key={i}>{project}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <UserRolModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onCreateRole={(newRole) => {
            setRoles((prev) => [...prev, newRole]);
          }}
        />
      </div>
    </div>
  );
};

export default UserRol;
