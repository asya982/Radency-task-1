import { updateStatus } from "./renderTable.js";

export let notesList = [
  {
    id: 0,
    name: "Meeting Reminder",
    created: "25/07/2023",
    category: 0,
    content: "Don't forget the team meeting at 3 PM today.",
    dates: [],
    isActive: true,
  },
  {
    id: 1,
    name: "Grocery List",
    created: "25/07/2023",
    category: 0,
    content: "Buy milk, eggs, bread, and fruits.",
    dates: [],
    isActive: true,
  },
  {
    id: 2,
    name: "Book Recommendation",
    created: "25/07/2023",
    category: 2,
    content: "Read 'The Alchemist' by Paulo Coelho.",
    dates: [],
    isActive: true,
  },
  {
    id: 3,
    name: "Gift Ideas",
    created: "25/07/2023",
    category: 2,
    content: "Think of gift ideas for mom's birthday.",
    dates: [],
    isActive: true,
  },
  {
    id: 4,
    name: "Project Deadline",
    created: "25/07/2023",
    category: 1,
    content: "Finish the report and submit it by Friday(10/08/2023)",
    dates: ["10/08/2023"],
    isActive: true,
  },
  {
    id: 5,
    name: "Travel Plans",
    created: "25/07/2023",
    category: 1,
    content:
      "Research and plan for the summer vacation during 10/08/2023 26/07/2023",
    dates: ["10/08/2023", "26/07/2023"],
    isActive: true,
  },
  {
    id: 6,
    name: "Fitness Goals",
    created: "25/07/2023",
    category: 0,
    content: "Go for a jog and eat a healthy dinner.",
    dates: [],
    isActive: true,
  },
];

export const deleteItem = (itemId) => {
  notesList = notesList.filter((note) => note.id !== itemId);
  updateStatus(true);
};

export const archiveItem = (itemId, status) => {
  const currentElement = notesList.find((el) => el.id === itemId);
  currentElement.isActive = status;
  updateStatus(!status);
};

export const addNewItem = (item) => {
  notesList = [item, ...notesList];
  updateStatus(true);
};

export const editItem = (id, name, content, category, dates) => {
  let isActive = true;
  notesList = notesList.map((el) => {
    if (el.id === id) {
      isActive = el.isActive;
      return { ...el, name, content, category, dates };
    } else {
      return el;
    }
  });
  
  updateStatus(isActive);
};
