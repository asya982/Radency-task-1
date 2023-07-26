import { categories } from "../../static/categories.js";
import ControlButtons from "./ControlButtons.js";

export default class NoteItem {
  constructor(item) {
    this.el = document.createElement("tr");
    this.el.className = `note-item-${item.id}`;

    Object.keys(item).forEach((key) => {
      const tableData = document.createElement("td");
      switch (key) {
        case "name":
          const itemCategory = categories[item.category];
          tableData.innerHTML = `<img src=${itemCategory.icon} alt=${itemCategory.title} class="item-icon" />`;
          break;

        case "category":
          tableData.innerHTML = categories[item[key]].title;
          this.el.appendChild(tableData);
          return;

        case "isActive":
        case "id":
          return;

        default:
          break;
      }

      tableData.innerHTML += item[key];
      this.el.appendChild(tableData);
    });

    const controlls = new ControlButtons(item.id);
    this.el.appendChild(controlls.controllArea);
  }
}
