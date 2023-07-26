import { archiveItem, deleteItem } from "../notes.js";
import ModalForm from "./ModalForm.js";

export default class ControlButtons {
  constructor(itemId) {
    this.controllArea = document.createElement("td");
    this.archiveBtn = createButton('<i class="bi bi-archive"></i>', () =>
      archiveItem(itemId)
    );
    this.deleteBtn = createButton('<i class="bi bi-trash2"></i>', () =>
      deleteItem(itemId)
    );
    this.editBtn = createButton('<i class="bi bi-pen"></i>', () => {
      ModalForm(false, itemId);
    });

    this.editBtn.setAttribute("data-bs-toggle", "modal");
    this.editBtn.setAttribute("data-bs-target", "#formModal");

    this.controllArea.appendChild(this.editBtn);
    this.controllArea.appendChild(this.archiveBtn);
    this.controllArea.appendChild(this.deleteBtn);

  }
}

const createButton = (name, event) => {
  const button = document.createElement("button");
  button.className = "btn";
  button.innerHTML = name;
  button.addEventListener("click", event);
  return button;
};
