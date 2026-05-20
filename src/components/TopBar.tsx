import { Search, ChevronDown } from "lucide-react"
import user from "../assets/Group 382.png"
import logo2 from "../assets/Vector.png"
const TopBar = () => {
  return (
    <div className="flex px-8 items-center border-l border-b border-b-gray-200  border-l-gray-200 justify-between w-full h-20">
      <div className="flex justify-between h-12 items-center border border-gray-400 rounded-3xl w-1/2 px-4 gap-1">
      <div className="flex items-center gap-2">
      <Search size={22} strokeWidth={1} color="#b8b8b8" />
      <input className="" type="text" placeholder="Buscar oportunidades..."/>
      </div>
        <img className="w-5 h-5" src={logo2} alt="Logo"/>
      </div>

      <div className="flex items-center gap-4 h-20">
        <ChevronDown size={25}/>
        <span className="flex items-center justify-center bg-blue-800 w-12 h-12 rounded-full">
        <img className="" src={user} alt="User" />
        </span>
      </div>

    </div>
  )
}

export default TopBar
