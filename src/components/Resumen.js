import React from "react";
import { primeraMayuscula } from "../helper";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  //Extraer datos
  const { marca, year, plan } = datos;
  if (marca === "" || plan === "" || year === "") return null;

  return (
    <ContenedorResumen>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>Marca: {primeraMayuscula(marca)}</li>
        <li>Plan: {primeraMayuscula(plan)}</li>
        <li>Año del auto: {year} </li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propType = {
  datos: PropTypes.object.isRequired,
};

export default Resumen;
