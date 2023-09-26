const userInput = document.querySelector(".form-control");
userInput.focus();
const submit = document.querySelector(".btn");
// let listBtn = null;

const listItems = document.querySelector(".list-items");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (userInput.value === "") return;
  let list = document.createElement("li");
  list.className = "list";
  list.innerHTML = `<span class="span"> <input type="checkbox" class="input" /> <p class = "list-text">${userInput.value}</p> </span> <button class = "list-btn">X</button>`;
  listItems.appendChild(list);
  userInput.value = "";

  list.addEventListener("click", function (e) {
    if (e.target.classList.contains("list-btn")) {
      e.target.closest(".list").remove();
    }
    if (e.target.checked) {
      const line = e.target.nextElementSibling;
      line.classList.add("line-through");
    }
    if (!e.target.checked) {
      const line = e.target.nextElementSibling;
      line?.classList?.remove("line-through");
    }
  });
});
