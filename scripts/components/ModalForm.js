import { categories } from "../../static/categories.js";
import { notesList } from "../notes.js";

export default function ModalForm(isCreate, itemId) {
  const name = document.getElementById("name");
  const content = document.getElementById("content");
  const category = document.getElementById("category");
  const initialData = notesList.find((el) => el.id === itemId);


  const formTitle = document.getElementById("modal-header-text");
  formTitle.innerText = isCreate ? "Create new note" : "Edit note";

  name.value = "";
  content.value = "";
  category.innerHTML = "";

  const categorySelect = document.getElementById("category");

  categories.forEach((el) => {
    const option = document.createElement("option");
    option.value = el.id;
    option.innerHTML = el.title;

    if (!isCreate && initialData.category === el.id) {
      option.selected = true;
    }
    categorySelect.appendChild(option);
  });

  if (!isCreate) {
    name.value = initialData.name;
    content.value = initialData.content;
  }
}

