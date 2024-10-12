const animalesCallejeros = [];
let continuarBusqueda = true;

function registrarAnimal() {
  let tipoAnimal = prompt("¿Qué tipo de animal viste? (ej. perro, gato, etc.)");
  let ubicacion = prompt("¿Dónde viste al animal?");
  let fechaVisto = prompt("¿Cuándo viste al animal? (ej. 2024-10-12)");
  let detalles = prompt("¿Algún detalle adicional que te gustaría agregar?");

  let animal = {
    tipo: tipoAnimal.toLowerCase(),
    ubicacion: ubicacion.toLowerCase(),
    fecha: fechaVisto,
    detalles: detalles,
  };

  animalesCallejeros.push(animal);

  alert("¡El animal callejero ha sido registrado exitosamente!");
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
    console.log(animalesEncontrados);
  } else {
    console.log(
      "No se encontraron animales que coincidan con los criterios de búsqueda."
    );
  }
}

function mostrarResumen() {
  if (animalesCallejeros.length === 0) {
    alert("No se han registrado animales todavía.");
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

let deseaRegistrar = confirm("¿Deseas registrar un animal callejero?");
if (deseaRegistrar) {
  let continuarRegistro = true;

  while (continuarRegistro) {
    registrarAnimal();

    let respuestaUsuario = confirm("¿Deseas registrar otro animal?");
    if (!respuestaUsuario) {
      continuarRegistro = false;
    }
  }
}

let respuestaResumen = confirm(
  "¿Deseas ver un resumen de todos los animales registrados?"
);
if (respuestaResumen) {
  mostrarResumen();
}

let respuestaBusqueda = confirm(
  "¿Deseas buscar animales callejeros por tipo y ubicación?"
);

if (respuestaBusqueda) {
  while (continuarBusqueda) {
    buscarPorTipoYUbicacion();
    let buscarDeNuevo = confirm(
      "¿Deseas buscar animales en otro tipo o ubicación?"
    );
    if (!buscarDeNuevo) {
      continuarBusqueda = false;
    }
  }
}

alert("¡Gracias por usar el sistema de registro de animales callejeros!");
