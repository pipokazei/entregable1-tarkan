const animalesCallejeros = [];

class Animal {
  constructor(tipo, ubicacion, fecha, detalles) {
    (this.tipo = tipo),
      (this.ubicacion = ubicacion),
      (this.fecha = fecha),
      (this.detalles = detalles);
  }
}

function registrarAnimal() {
  let tipoAnimal = prompt("¿Qué tipo de animal viste? (ej. perro, gato, etc.)");
  let ubicacion = prompt("¿Dónde viste al animal?");
  let fechaVisto = prompt("¿Cuándo viste al animal? (ej. 10-10-2024)");
  let detalles = prompt("¿Algún detalle adicional que te gustaría agregar?");

  const animal = new Animal(tipoAnimal, ubicacion, fechaVisto, detalles);

  animalesCallejeros.push(animal);
  alert("¡El animal callejero fue registrado exitosamente!");
}

function buscarPorTipoYUbicacion() {
  let buscarTipo = prompt(
    "Ingresa el tipo de animal que deseas buscar (ej. perro, gato):"
  ).toLowerCase();
  let buscarUbicacion = prompt(
    "Ingresa la ubicación donde deseas buscar este animal:"
  ).toLowerCase();

  let animalesEncontrados = animalesCallejeros.filter(
    (animal) =>
      animal.tipo === buscarTipo && animal.ubicacion === buscarUbicacion
  );

  if (animalesEncontrados.length > 0) {
    let mensaje = "Animales encontrados:\n\n";
    animalesEncontrados.forEach((animal) => {
      mensaje +=
        "Tipo de Animal: " +
        animal.tipo +
        "\nUbicación: " +
        animal.ubicacion +
        "\nFecha visto: " +
        animal.fecha +
        "\nDetalles: " +
        animal.detalles +
        "\n\n";
    });
    alert(mensaje);
  } else {
    alert("No se encontraron animales con los criterios especificados.");
  }
}

function mostrarResumen() {
  if (animalesCallejeros.length === 0) {
    alert("No se registraron animales todavía.");
    return;
  }

  const { contadorTipos, contadorUbicaciones } = animalesCallejeros.reduce(
    (counters, animal) => {
      counters.contadorTipos[animal.tipo] = (counters.contadorTipos[animal.tipo] || 0) + 1;
      counters.contadorUbicaciones[animal.ubicacion] = (counters.contadorUbicaciones[animal.ubicacion] || 0) + 1;
      return counters;
    },
    { contadorTipos: {}, contadorUbicaciones: {} }
  );

  let mensaje = "Resumen de Animales Registrados:\n";
  mensaje += "Total de animales registrados: " + animalesCallejeros.length + "\n\n";

  mensaje += "Desglose por Tipo de Animal:\n";
  for (let tipo in contadorTipos) {
    mensaje += `${tipo}: ${contadorTipos[tipo]}\n`;
  }
  
  mensaje += "\nDesglose por Ubicación:\n";
  for (let ubicacion in contadorUbicaciones) {
    mensaje += `${ubicacion}: ${contadorUbicaciones[ubicacion]}\n`;
  }

  alert(mensaje);
}

function menuPrincipal() {
  let continuar = true;

  while (continuar) {
    let opcion = parseInt(
      prompt(
        "Elige una opción:\n" +
          "1. Registrar un animal callejero\n" +
          "2. Buscar animales por tipo y ubicación\n" +
          "3. Ver resumen de animales registrados\n" +
          "4. Salir"
      )
    );

    switch (opcion) {
      case 1:
        registrarAnimal();
        break;
      case 2:
        buscarPorTipoYUbicacion();
        break;
      case 3:
        mostrarResumen();
        break;
      case 4:
        continuar = false;
        alert(
          "¡Gracias por usar el sistema de registro de animales callejeros!"
        );
        break;
      default:
        alert("Opción no válida. Por favor, elige una opción del 1 al 4.");
    }
  }
}

menuPrincipal();
