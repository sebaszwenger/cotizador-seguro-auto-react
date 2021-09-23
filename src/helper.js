// Obtiene la difererncia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

// Calcula el total a pagar segun la marca
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "Europeo":
      incremento = 1.3;
      break;
    case "Americano":
      incremento = 1.15;
      break;
    case "Asiatico":
      incremento = 1.05;
      break;

    default:
      break;
  }

  return incremento;
}

//Calcula el total a pagar segun el Plan
export function calcularPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

//Muestra la primera letra en mayuscula
export function primeraMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
