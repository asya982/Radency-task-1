import ModalForm from "./components/ModalForm.js";
import { updateStatus } from "./renderTable.js";
import submitForm from "./submitForm.js";

updateStatus(true);

const form = document.querySelector("form");
const createNoteBtn = document.querySelector("#create-note");
const navbarActive = document.querySelector("#active");
const navbarArchived = document.querySelector("#archived");

createNoteBtn.addEventListener("click", () => {
  form.id = "create-note";
  ModalForm(true);
});

form.addEventListener("submit", (event) => {
  const name = event.target.name.value;
  const content = event.target.content.value;
  const category = Number(event.target.category.value);

  event.preventDefault();
  submitForm(event.target.id, name, content, category);
});

navbarActive.addEventListener("click", () => {
  navbarArchived.classList.remove("active");
  navbarActive.classList.add("active");

  updateStatus(true);
});

navbarArchived.addEventListener("click", () => {
  navbarArchived.classList.add("active");
  navbarActive.classList.remove("active");
  updateStatus(false);
});
