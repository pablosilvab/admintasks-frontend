import React from "react";
import NuevoProyecto from '../proyectos/NuevoProyecto'

const Sidebar = () => {
  return (
    <aside>
      <h1>
        Admin<span>Tasks</span>
        <NuevoProyecto/>
      </h1>
      <div className="proyectos">
        <h2>Tus proyectos</h2>
      </div>
    </aside>
  );
};

export default Sidebar;
