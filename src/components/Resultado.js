import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  padding: 0.5rem;
  margin-top: 1rem;
  text-align: center;
`;

const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const TextoCotizacion = styled.p`
  color: #00838f;
  padding: 0.5rem;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  font-weight: bold;
`;

const Resultado = ({ cotizacion }) => {
  return (
    <>
      {cotizacion === 0 ? (
        <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
      ) : (
        <ResultadoCotizacion>
          <TextoCotizacion>
            El total es: <span>${cotizacion}</span>
          </TextoCotizacion>
        </ResultadoCotizacion>
      )}
    </>
  );
};

Resultado.propType = {
  cotizacion: PropTypes.number.isRequired,
};

export default Resultado;
