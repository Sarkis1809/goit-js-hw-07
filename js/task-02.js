"use stcrict";

const listRef = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const addIngredienrItem = ingredients.map((ingredient) => {
  const ingredientItemRef = document.createElement("li");
  ingredientItemRef.textContent = ingredient;
  fragment.appendChild(ingredientItemRef);
  return fragment;
});

listRef.appendChild(fragment);
