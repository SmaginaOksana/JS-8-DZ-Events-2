const container = document.querySelector(".container");
const formType = document.querySelector(".formType");
const departure = document.querySelector(".departure");
const arrival = document.querySelector(".arrival");
const select = document.querySelector("select");
const button = document.querySelector(".submit");
const list = document.querySelector(".list");
const array = [];
const openBTN = document.querySelector(".button");

openBTN.addEventListener("click", (event) => {
  formType.classList.remove("none");
  openBTN.classList.add("none");
  event.stopPropagation();
});
container.addEventListener("click", () => {
  formType.classList.add("none");
  openBTN.classList.remove("none");
});
formType.addEventListener("click", (event) => {
  event.stopPropagation();
});

formType.addEventListener("submit", (event) => {
  event.preventDefault();
  if (
    departure.value === "" ||
    arrival.value === "" ||
    select.value === "Продолжительность"
  ) {
    alert("Заполните все поля!");
    return;
  }
  const gettingInfo = {
    departure: departure.value,
    arrival: arrival.value,
    select: select.value,
  };
  array.push(gettingInfo);
  formType.reset();
  receivedInfo(gettingInfo);
  formType.classList.add("none");
  openBTN.classList.remove("none");
});
const receivedInfo = (arr) => {
  list.innerHTML = "";
  array.forEach((item) => {
    const ul = document.createElement("ul");
    ul.classList.add("info");
    ul.innerHTML = `<li>Страна вылета: ${item.departure}</li><li>Направление: ${item.arrival}</li><li>Продолжительность: ${item.select}</li>`;
    list.append(ul);
  });
};
