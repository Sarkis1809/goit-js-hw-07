"use stcrict";
const categoriesListRef = document.querySelector("#categories");
const categoriesItemsRef = document.querySelectorAll(".item");
console.log(`В списке ${categoriesItemsRef.length} категории.`);


const countOfItems = categoriesItemsRef.forEach((element) =>
  console.log(
    `Категория: ${element.querySelector("h2").textContent}
  Количество элементов: ${element.querySelectorAll("li").length}`
  )
);

