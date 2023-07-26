import { categories } from "../../static/categories.js";
import { notesList } from "../notes.js";

export default class CategoryItem {
  constructor(category) {
    this.el = document.createElement("tr");
    for (let i = 0; i < 3; i++) {
      const tableData = document.createElement("td");
      switch (i) {
        case 0:
          const itemCategory = categories[category];
          tableData.innerHTML = `<img src=${itemCategory.icon} alt=${itemCategory.title} class="item-icon" />`;
          tableData.innerHTML += itemCategory.title;
          break;
        case 1:
          tableData.innerHTML = notesList.filter(
            (item) => item.isActive && item.category === category
          ).length;
          break;
        case 2:
          tableData.innerHTML = notesList.filter(
            (item) => !item.isActive && item.category === category
          ).length;
        default:
          break;
      }
      this.el.appendChild(tableData);
    }
  }
}
