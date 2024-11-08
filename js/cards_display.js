let container = document.getElementsByClassName("cards-container")[0];
let template = document.getElementsByClassName("card")[0];

container.innerHTML = "";

fetch("./js/cards.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((animal) => {
      const animalCard = template.cloneNode(true);
      animalCard.style.display = "flex";

      animalCard.getElementsByClassName("card__img")[0].src = animal.img;
      animalCard.getElementsByClassName("card__name")[0].innerHTML =
        animal.name;
      animalCard.getElementsByClassName("card__info")[0].innerHTML =
        animal.info;
      animalCard.getElementsByClassName("card__price")[0].innerHTML =
        animal.price;

      container.appendChild(animalCard);
    });
  })
  .catch((error) => {
    console.error("Erreur lors du chargement du fichier JSON :", error);
  });

container_knowledge = document.getElementsByClassName("knowledge_container")[0];
template_knowledge = document.getElementsByClassName("knowledge_card")[0];

container_knowledge.innerHTML = "";

fetch("./js/knowledge.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((animal) => {
      const animalCard = template_knowledge.cloneNode(true);
      animalCard.style.display = "flex";

      animalCard.getElementsByClassName("knowledge_card__img")[0].src =
        animal.img;
      animalCard.getElementsByClassName(
        "knowledge_card__section"
      )[0].innerHTML = animal.section;
      animalCard.getElementsByClassName("knowledge_card__title")[0].innerHTML =
        animal.title;
      animalCard.getElementsByClassName("knowledge_card__info")[0].innerHTML =
        animal.info;

      container_knowledge.appendChild(animalCard);
    });
  })
  .catch((error) => {
    console.error("Erreur lors du chargement du fichier JSON :", error);
  });
