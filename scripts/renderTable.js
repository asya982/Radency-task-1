import { categories } from "../static/categories.js";
import CategoryItem from "./components/CategoryItem.js";
import { notesList } from "./notes.js";
import NoteItem from "./components/noteItem.js";

export function renderNotesTable(isActive) {
  const list = document.querySelector("#active-notes-list");
  list.innerHTML = "";

  notesList
    .filter((item) => item.isActive === isActive)
    .forEach((item) => {
      const noteItem = new NoteItem(item);
      list.appendChild(noteItem.el);
    });
}

export function renderCategoryTable() {
  const table = document.getElementById("grouped-items-list");
  table.innerHTML = "";

  categories.forEach((category) => {
    const categoryItem = new CategoryItem(category.id);
    table.appendChild(categoryItem.el);
  });
}

export const updateStatus = (isActive) => {
  renderNotesTable(isActive);
  renderCategoryTable();
};
