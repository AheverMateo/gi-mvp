import { useState } from "react";
import userAdd from "../assets/peopleBlueSVG.svg";

interface Role {
  title: string;
  skills: string[];
  projects: string[];
}

interface UserRolModalProps {
  open: boolean;
  onClose: () => void;

  onCreateRole: (role: Role) => void;
}
const UserRolModal = ({ open, onClose, onCreateRole }: UserRolModalProps) => {
  
  const [title, setTitle] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [projects, setProjects] = useState<string>("");
  
  if (!open) return null;

  const handleCreateRole = () => {
  const newRole: Role = {
    title,

    skills: skills
      .split(",")
      .map((skill) => skill.trim()),

    projects: projects
      .split(",")
      .map((project) => project.trim()),
  };

  onCreateRole(newRole);

  onClose();

  setTitle("");
  setSkills("");
  setProjects("");
};

  return (
    <div className=" fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className=" bg-white w-[473px] h-[476px] rounded-3xl p-8 flex flex-col gap-6 ml-62 mt-40">
        <div className="flex justify-between items-center">
          <img className="" src={userAdd} alt="" />
          <button onClick={onClose} className="text-2xl cursor-pointer">
            ×
          </button>
        </div>
        <form className="flex flex-col gap-6 gap-2">
          <div className="flex flex-col gap-2">
            <label className="text-[#083287] font-bold">Titulo del Rol</label>
            <input
              className="h-[38px] border border-[#BCBBBB] rounded-full text-xs px-3 outline-none"
              type="text"
              placeholder="Ej: Senior Frontender; Especialista SEO; Startup Founder"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#083287] font-bold">
              Habilidades (Presione Enter)
            </label>
            <input
              className="h-[38px] border border-[#BCBBBB] rounded-full text-xs px-3 outline-none"
              type="text"
              placeholder="Ej: React; TypeScript; Analytics, Management"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
            <em className="text-[#727272] text-xs pl-2">
              Agrega al menos una habilidad para comenzar.
            </em>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#083287] font-bold">
              Proyectos realizados (presiona Enter)
            </label>
            <input
              className="h-[38px] border border-[#BCBBBB] rounded-full text-xs px-3 outline-none"
              type="text"
              placeholder="Nombre del proyecto, descripción breve."
              value={projects}
              onChange={(e) => setProjects(e.target.value)}
            />
          </div>
        </form>
        <div className="flex justify-end gap-4 ">
          <button 
            className=" w-[137px] h-[47px] flex justify-center items-center bg-[#083287] font-semibold text-white rounded-full cursor-pointer hover:bg-blue-800"
            onClick={handleCreateRole}
          >
            Crear rol
          </button>
          <button
            className=" w-[137px] h-[47px] flex justify-center items-center bg-[#00C5D0] font-semibold text-white rounded-full cursor-pointer hover:bg-[#00B0BB]"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserRolModal;
