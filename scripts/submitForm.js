import { findDates, publishDate } from "./helpers.js";
import { addNewItem, editItem, notesList } from "./notes.js";

export default function submitForm(id, name, content, category) {
  const noteId = Number(id);
  const isCreate = isNaN(id);
  
  const data = {
    id: isCreate ? notesList.length : noteId,
    name,
    created: publishDate(),
    category,
    content,
    dates: findDates(content),
    isActive: true,
  };

  try {
    if (isCreate) {
      addNewItem(data);
    } else {
      editItem(noteId, name, content, category, data.dates);
    }
  } catch (error) {
    console.log(error);
  }
}
