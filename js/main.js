const animalesCallejeros = [];

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
  alert("¡El animal callejero fue registrado exitosamente!");
}

function buscarPorTipoYUbicacion() {
  let buscarTipo = prompt("Ingresa el tipo de animal que deseas buscar (ej. perro, gato):").toLowerCase();
  let buscarUbicacion = prompt("Ingresa la ubicación donde deseas buscar este animal:").toLowerCase();
  let animalesEncontrados = [];

  for (let animal of animalesCallejeros) {
    if (animal.tipo === buscarTipo && animal.ubicacion === buscarUbicacion) {
      animalesEncontrados.push(animal);
    }
  }

  if (animalesEncontrados.length > 0) {
    console.log(animalesEncontrados);
  } else {
    console.log("No se encontraron animales que coincidan con los criterios de búsqueda.");
  }
}

function mostrarResumen() {
  if (animalesCallejeros.length === 0) {
    alert("No se registraron animales todavía.");
    return;
  }

  let contadorTipos = {};
  let contadorUbicaciones = {};

  for (let animal of animalesCallejeros) {
    let { tipo, ubicacion } = animal;

    contadorTipos[tipo] = (contadorTipos[tipo] || 0) + 1;
    contadorUbicaciones[ubicacion] = (contadorUbicaciones[ubicacion] || 0) + 1;
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

function menuPrincipal() {
  let continuar = true;

  while (continuar) {
    let opcion = prompt(
      "Elige una opción:\n" +
      "1. Registrar un animal callejero\n" +
      "2. Buscar animales por tipo y ubicación\n" +
      "3. Ver resumen de animales registrados\n" +
      "4. Salir"
    );

    switch (opcion) {
      case "1":
        registrarAnimal();
        break;
      case "2":
        buscarPorTipoYUbicacion();
        break;
      case "3":
        mostrarResumen();
        break;
      case "4":
        continuar = false;
        alert("¡Gracias por usar el sistema de registro de animales callejeros!");
        break;
      default:
        alert("Opción no válida. Por favor, elige una opción del 1 al 4.");
    }
  }
}

menuPrincipal();
