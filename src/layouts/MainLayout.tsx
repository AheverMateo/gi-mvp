import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"

const MainLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar/>
      <div className="flex-1 flex flex-col ">
        <TopBar/>
        <main className="flex-1 overflow-y-auto">
          <Outlet/>
        </main>
      </div>
    </div>
  )
}

export default MainLayout
