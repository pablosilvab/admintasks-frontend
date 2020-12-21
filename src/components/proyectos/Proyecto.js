import React, { Fragment } from "react";

const Proyecto = ({ proyecto }) => {
  return (
    <Fragment>
      <li>
        <button type="button" className="btn btn-blank">
          {" "}
          {proyecto.nombre}
        </button>
      </li>
    </Fragment>
  );
};

export default Proyecto;
