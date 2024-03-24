import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


import { DashboardMod } from "./pages/DashboardMod";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<DashboardMod />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
