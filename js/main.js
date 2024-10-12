const animalesCallejeros = [];
let continuarRegistro = true;
let continuarBusqueda = true;

function registrarAnimal() {
  let tipoAnimal = prompt("¿Qué tipo de animal viste? (ej. perro, gato, etc.)");
  let ubicacion = prompt("¿Dónde viste al animal?");
  let fechaVisto = prompt("¿Cuándo viste al animal? (ej. 12-10-2024)");
  let detalles = prompt("¿Algún detalle adicional que te gustaría agregar?");

  let animal = {
    tipo: tipoAnimal.toLowerCase(),
    ubicacion: ubicacion.toLowerCase(),
    fecha: fechaVisto,
    detalles: detalles,
  };

  animalesCallejeros.push(animal);

  alert("¡El animal ha sido registrado exitosamente!");
}

function buscarPorTipoYUbicacion() {
  let buscarTipo = prompt(
    "Ingresa el tipo de animal que deseas buscar (ej. perro, gato):"
  ).toLowerCase();
  let buscarUbicacion = prompt(
    "Ingresa la ubicación donde deseas buscar este animal:"
  ).toLowerCase();
  let animalesEncontrados = [];

  for (let i = 0; i < animalesCallejeros.length; i++) {
    if (
      animalesCallejeros[i].tipo === buscarTipo &&
      animalesCallejeros[i].ubicacion === buscarUbicacion
    ) {
      animalesEncontrados.push(animalesCallejeros[i]);
    }
  }

  if (animalesEncontrados.length > 0) {
    console.log(
      "Animales callejeros encontrados en " +
        buscarUbicacion +
        " que son de tipo " +
        buscarTipo +
        ":"
    );
    for (let i = 0; i < animalesEncontrados.length; i++) {
      console.log(animalesEncontrados);
    }
  } else {
    console.log(
      "No se encontraron " + buscarTipo + " callejeros en " + buscarUbicacion
    );
  }
}

function mostrarResumen() {
  if (animalesCallejeros.length === 0) {
    alert("No se registraron animales todavía.");
    return;
  }

  let contadorTipos = {};
  let contadorUbicaciones = {};

  for (let i = 0; i < animalesCallejeros.length; i++) {
    let tipo = animalesCallejeros[i].tipo;
    let ubicacion = animalesCallejeros[i].ubicacion;

    if (contadorTipos[tipo]) {
      contadorTipos[tipo]++;
    } else {
      contadorTipos[tipo] = 1;
    }

    if (contadorUbicaciones[ubicacion]) {
      contadorUbicaciones[ubicacion]++;
    } else {
      contadorUbicaciones[ubicacion] = 1;
    }
  }

  console.log("Resumen de Animales Registrados:");
  console.log("Total de animales registrados: " + animalesCallejeros.length);

  console.log("Desglose por Tipo de Animal:");
  for (let tipo in contadorTipos) {
    console.log(`${tipo}: ${contadorTipos[tipo]}`);
  }

  console.log("Desglose por Ubicación:");
  for (let ubicacion in contadorUbicaciones) {
    console.log(`${ubicacion}: ${contadorUbicaciones[ubicacion]}`);
  }
}

let primeraRespuesta = prompt("¿Deseas registrar un animal callejero? (si/no)");

if (primeraRespuesta.toLowerCase() === "si") {
  while (continuarRegistro) {
    registrarAnimal();

    let respuestaUsuario = prompt("¿Deseas registrar otro animal? (si/no)");
    if (respuestaUsuario.toLowerCase() !== "si") {
      continuarRegistro = false;
    }
  }
}

let respuestaResumen = prompt(
  "¿Deseas ver un resumen de todos los animales registrados? (si/no)"
);
if (respuestaResumen.toLowerCase() === "si") {
  mostrarResumen();
}

let respuestaBusqueda = prompt(
  "¿Deseas buscar animales callejeros por tipo y ubicación? (si/no)"
);

if (respuestaBusqueda.toLowerCase() === "si") {
  while (continuarBusqueda) {
    buscarPorTipoYUbicacion();
    let buscarDeNuevo = prompt(
      "¿Deseas buscar animales en otro tipo o ubicación? (si/no)"
    );
    if (buscarDeNuevo.toLowerCase() !== "si") {
      continuarBusqueda = false;
    }
  }
}

alert("¡Gracias por usar el sistema de registro de animales callejeros!");
