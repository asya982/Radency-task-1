import { handleSubmit } from "./components/ModalForm.js";
import { findDates, publishDate } from "./helpers.js";
import { addNewItem, editItem, notesList } from "./notes.js";

export default function submitForm(isCreate, noteId, noteStatus) {
  const content = document.getElementById("content").value;
  const data = {
    id: isCreate ? notesList.length : noteId,
    name: document.getElementById("name").value,
    created: publishDate(),
    category: document.getElementById("category").value,
    content: content,
    dates: findDates(content),
    isActive: noteStatus,
  };

  try {
    if (isCreate) {
      addNewItem(data);
    } else {
      editItem(data);
    }
    document
      .getElementById("submit-form")
      .removeEventListener("click", handleSubmit);
  } catch (error) {
    console.log(error);
  }
}
