import { Outlet } from "react-router-dom";
import { NavBar } from "../../shared";


export const StoreLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      
      <div className="flex px-10">
        <Outlet />
      </div>
    </div>
  )
}
