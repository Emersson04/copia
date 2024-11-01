import React from "react";
import { useSidebar } from "../../context/SidebarContext";
import NavItem from "../atoms/NavItem";
import { X, Menu } from "lucide-react";



const Sidebar = () => {
    const { expandir, toggleSidebar } = useSidebar()


    return (
        <div className={`flex flex-col h-screen bg-[#003366] text-white ${expandir ? 'w-64' : 'w-20'} transition-width duration-300`}>
            <button onClick={toggleSidebar} className="p-2 px-7 flex w-full justify-start items-center">
                <span>{expandir ?  <Menu /> : <X />}</span>
            </button>

            <div className="mt-4">
            <NavItem icon="Home" label="Home" path="/" />
            <NavItem icon="Users" label="Usuarios" path="/user" />
            {/* <NavItem icon="Mountain" label="Fincas" path="/finca" /> */}
            <NavItem icon="Coffee" label="Variedades" path="/variedades" />
            {/* <NavItem icon="TentTree" label="Lotes" path="/lotes" /> */}
            {/* <NavItem icon="NotebookPen" label="Muestras" path="/muestras" /> */}
            {/* <NavItem icon="Scale" label="Analisis" path="/analisis" /> */}
            {/* <NavItem icon="FileText" label="Variables" path="/variables" />
            <NavItem icon="FileSearch" label="Resultados" path="/resultados" />
            <NavItem icon="FileBarChart" label="Sensorial" path="/sensorial" /> */}
            {/* <NavItem icon="FileText" label="Reportes" path="/reportes" /> */}
            </div>
        </div>
    )
}

export default Sidebar