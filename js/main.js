$(document).ready(() => {
  const animalForm = document.getElementById("animalForm");
  const animalCardsContainer = document.getElementById("animalCardsContainer");
  const searchInput = document.getElementById("searchInput");
  const openModalButton = document.getElementById("openModalButton");

  function formatDate(dateString) {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  }

  const displayAnimals = (animals) => {
    animalCardsContainer.innerHTML = "";

    if (animals.length === 0) {
      animalCardsContainer.innerHTML = `
            <div class="col-12 text-center mt-4">
                <p>No hay animales registrados aún. ¡Agrega el primero!</p>
            </div>
        `;
      return;
    }

    animals.forEach((animal) => {
      const card = document.createElement("div");
      card.className = "col-md-4 my-2";
      card.innerHTML = `
              <div class="card">
                  <div class="card-body">
                      <h5 class="card-title">${animal.type}</h5>
                      <p class="card-text">
                          <strong>Ubicación:</strong> ${animal.location} <br>
                          <strong>Fecha:</strong> ${formatDate(
                            animal.date
                          )} <br>
                          <strong>Detalles:</strong> ${animal.details || "N/A"}
                      </p>
                  </div>
              </div>
          `;
      animalCardsContainer.appendChild(card);
    });
  };

  let animalesCallejeros =
    JSON.parse(localStorage.getItem("animalesCallejeros")) || [];
  displayAnimals(animalesCallejeros);

  animalForm.onsubmit = (event) => {
    event.preventDefault();

    const animalType = document.getElementById("animalType").value;
    const animalLocation = document.getElementById("animalLocation").value;
    const animalDate = document.getElementById("animalDate").value;
    const animalDetails = document.getElementById("animalDetails").value;

    const newAnimal = {
      type: animalType,
      location: animalLocation,
      date: animalDate,
      details: animalDetails,
    };

    animalesCallejeros.push(newAnimal);
    localStorage.setItem(
      "animalesCallejeros",
      JSON.stringify(animalesCallejeros)
    );
    displayAnimals(animalesCallejeros);
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("addAnimalModal")
    );
    modal.hide();
    animalForm.reset();
  };

  searchInput.onkeyup = () => {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredAnimals = animalesCallejeros.filter(
      (animal) =>
        animal.type.toLowerCase().includes(searchQuery) ||
        animal.location.toLowerCase().includes(searchQuery)
    );
    displayAnimals(filteredAnimals);
  };

  openModalButton.addEventListener("click", () => {
    const modal = new bootstrap.Modal(
      document.getElementById("addAnimalModal")
    );
    modal.show();
  });
});
