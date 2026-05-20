import Earth2 from "../assets/ItemsDashboard/Earth2.png";
import check2 from "../assets/ItemsDashboard/check2.png";
import star from "../assets/ItemsDashboard/star.png";
import info from "../assets/info.png";
import logo from "../assets/ISO GANDI.png";
import Candado from "../assets/Sidebar/Candado.png";
import Proyectos from "../assets/Sidebar/Proyectyos.png";
import Matching from "../assets/Sidebar/Matching.png";
import Gestion from "../assets/Sidebar/Gestion.png";
import Marketing from "../assets/Sidebar/Marketing.png";
import Portafolio from "../assets/Sidebar/Portafolio.png";
import usuario from "../assets/Sidebar/Usuario.png";
import roles from "../assets/Sidebar/Rol.png";
import Cerrar from "../assets/Sidebar/Cerrar.png";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const navItems1 = [
    {
      to: "/",
      icon: <img src={info} alt="Info" width={17} height={17} />,
      label: "Resumen",
    },
    {
      to: "/prospecto",
      icon: <img src={Earth2} alt="Earth" width={17} height={17} />,
      label: "Prospección",
    },
    {
      to: "/result",
      icon: <img src={check2} alt="Check" width={17} height={17} />,
      label: "Resultados",
    },
    {
      to: "/opportunities",
      icon: <img src={star} alt="Star" width={17} height={17} />,
      label: "Oportunidades",
    },
  ];

  const navItems2 = [
    {
      to: "/matching",
      icon: <img src={Matching} alt="Matching" width={15} height={15} />,
      label: "Matching",
    },
    {
      to: "/proyectos",
      icon: <img src={Proyectos} alt="Proyectos" width={15} height={15} />,
      label: "Proyectos",
    },
    {
      to: "/gestion",
      icon: <img src={Gestion} alt="Gestion" width={15} height={15} />,
      label: "Gestion",
    },
  ];

  const navItems3 = [
    {
      to: "/user",
      icon: <img src={usuario} alt="Usuario" width={17} height={17} />,
      label: "Mi Perfil",
    },
    {
      to: "/userRol",
      icon: <img src={roles} alt="Roles" width={12} height={16} />,
      label: "Mis Roles",
    },
    {
      to: "/portafolio",
      icon: <img src={Portafolio} alt="Portafolio" width={17} height={17} />,
      label: "Mi Portafolio",
    },
  ];

  return (
    <div className="w-62 h-screen flex flex-col">
      <div className="flex items-center gap-2 p-4">
        <img src={logo} alt="Logo" />
        <ChevronDown />
      </div>
      <nav className="p-6 flex flex-col justify-between flex-1 overflow-hidden">
        <div className="flex flex-col gap-7">
          <ul className="flex flex-col gap-2">
            {navItems1.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center p-3 gap-4 rounded-3xl w-full ${isActive ? "bg-[#EDFEFF]" : " hover:bg-[#EDFEFF]"}`
                  }
                >
                  {item.icon}
                  <h3 className="font-semibold text-[14px]">{item.label}</h3>
                </NavLink>
              </li>
            ))}
          </ul>
          <hr className="text-[#D9D9D9]" />
          <ul className="flex flex-col gap-2 bg-[#F5F5F5] rounded-[23.5px] p-1">
            {navItems2.map((item) => (
              <li key={item.to}>
                <div className="flex items-center p-3 rounded-3xl w-full justify-between">
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <h3 className=" text-[#727272] text-[14px]">
                      {item.label}
                    </h3>
                  </div>
                  <span>
                    <img className="h-2.5 w-2" src={Candado} alt="Candado" />
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <hr className="text-[#D9D9D9]" />

          <div className="flex items-center justify-between gap-2 bg-[#F5F5F5] rounded-[23.5px] h-10 px-4">
            <div className="flex items-center gap-4">
              <span>
                <img src={Marketing} alt="Marketing" />
              </span>
              <label className="text-[#727272] text-[14px]">Marketing</label>
            </div>
            <img className="h-2.5 w-2" src={Candado} alt="Candado" />
          </div>
          <hr className="text-[#D9D9D9]" />

          <ul className="flex flex-col gap-2">
            {navItems3.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center p-3 gap-4 rounded-3xl w-full ${isActive ? "bg-[#EDFEFF]" : " hover:bg-[#EDFEFF]"}`
                  }
                >
                  {item.icon}
                  <h3 className="text-[14px]">{item.label}</h3>
                </NavLink>
              </li>
            ))}
          </ul>
          <hr className="text-[#D9D9D9]" />
        </div>
        <button className="cursor-pointer flex items-center gap-4 w-32">
          <img src={Cerrar} alt="" />
          <span>Cerrar Sesión</span>
        </button>
      </nav>
    </div>
  );
};

export default SideBar;
