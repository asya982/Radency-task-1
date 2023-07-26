import { archiveItem, deleteItem } from "../notes.js";
import ModalForm from "./ModalForm.js";

export default class ControlButtons {
  constructor(itemId, isActive) {
    this.controllArea = document.createElement("td");
    this.archiveBtn = createButton('<i class="bi bi-archive"></i>', () =>
      archiveItem(itemId, false)
    );

    this.activateBtn = createButton(
      ' <i class="bi bi-layer-forward"></i>',
      () => archiveItem(itemId, true)
    );
    this.deleteBtn = createButton('<i class="bi bi-trash2"></i>', () =>
      deleteItem(itemId)
    );
    this.editBtn = createButton('<i class="bi bi-pen"></i>', () => {
      document.querySelector("form").id = itemId;
      ModalForm(false, itemId);
    });

    this.editBtn.setAttribute("data-bs-toggle", "modal");
    this.editBtn.setAttribute("data-bs-target", "#formModal");

    this.controllArea.appendChild(this.editBtn);
    this.controllArea.appendChild(
      isActive ? this.archiveBtn : this.activateBtn
    );
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
