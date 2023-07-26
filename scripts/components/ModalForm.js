import { categories } from "../../static/categories.js";
import { notesList } from "../notes.js";
import submitForm from "../submitForm.js";

let submittingData = {};

export default function ModalForm(isCreate, itemId) {
  const name = document.getElementById("name");
  const content = document.getElementById("content");
  const category = document.getElementById("category");
  const initialData = notesList.find((el) => el.id === itemId);

  const formTitle = document.getElementById("modal-header-text");
  formTitle.innerText = isCreate ? "Create new note" : "Edit note";

  let noteStatus = true;

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
    noteStatus = initialData.isActive;
  }

  submittingData = { isCreate, itemId: initialData.id, noteStatus };
  const saveChangesBtn = document.getElementById("submit-form");
  saveChangesBtn.setAttribute("data-bs-dismiss", "modal");

  saveChangesBtn.addEventListener("click", handleSubmit);
}

export const handleSubmit = () => {
  submitForm(
    submittingData.isCreate,
    submittingData.itemId,
    submittingData.noteStatus
  );
};
