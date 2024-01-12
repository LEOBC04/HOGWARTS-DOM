// ============= SELECTORES ==================
const cardsContainer = document.getElementById("cards-container");


//============= EVENTOS ========================
document.addEventListener("DOMContentLoaded", mostrarCards())

// ================= MOSTRANDO CARDS =====================



function mostrarCards() {
  let cargarPersonajes = "";
  characters.forEach((character) => {
    // console.log(character);
    cargarPersonajes += `
    <div class="card" data-id=${character.id}>
    <img src=${character.image} alt="" class="card__image">
    <div class="card__info">
      <h2 class="card__name">${character.name}</h2>
      <h3 class="card__item"><strong class="card__item--strong">Casa:</strong> ${character.house}</h3>
      <h3 class="card__item"><strong class="card__item--strong">Nacimiento:</strong> ${character.dateOfBirth} </h3>
      <h3 class="card__item"><strong class="card__item--strong">Linaje:</strong> ${character.ancestry} </h3>
    </div>
    <a href="#" class="card__button">Ver personaje</a>
  </div>
    `;
  });
  console.log(cargarPersonajes);
  cardsContainer.innerHTML = cargarPersonajes;
}
