import ModalForm from "./components/ModalForm.js";
import {renderCategoryTable, renderNotesTable} from "./renderTable.js";

renderNotesTable(true);
renderCategoryTable();

const createNoteBtn = document.querySelector("#create-note");
createNoteBtn.setAttribute("data-bs-toggle", "modal");
createNoteBtn.setAttribute("data-bs-target", "#formModal");
createNoteBtn.addEventListener("click", () => {
  ModalForm(true);
});
