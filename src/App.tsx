import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import DashboardPage from './page/DashboardPage'
import ProspectPage from './page/ProspectPage'
import './App.css'
import ResultPage from './page/ResultPage'
import OportunidadPage from './page/OportunidadPage'
import UserPage from './page/UserPage'
import UserRol from './page/UserRol'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<DashboardPage />}/>
            <Route path="/prospecto" element={<ProspectPage />} />
            <Route path='/result' element={<ResultPage/>}/>
            <Route path='/opportunities' element={<OportunidadPage/>}/>
            <Route path='/user' element={<UserPage/>}/>
            <Route path='/userRol' element={<UserRol/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
