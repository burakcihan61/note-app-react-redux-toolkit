import { createSlice, nanoid } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "notes",
  initialState: {
    items: localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : [
          {
            id: nanoid(),
            text: "Learn JavaScript",
            color: "#2a9d8f",
            time: "03.06.2022 11:56:55",
          },
          {
            id: nanoid(),
            text: "Learn ReactJS",
            color: "#219ebc",
            time: "15.09.2022 11:57:45",
          },
          {
            id: nanoid(),
            text: "Learn React Redux Toolkit",
            color: "#8ecae6",
            time: "15.09.2022 12:05:28",
          },
        ],
    edit: [],
    search: "",
  },

  reducers: {
    addNote: (state, action) => {
      const { text } = action.payload;
      const { color } = action.payload;
      const { time } = action.payload;

      state.items.push({
        id: nanoid(),
        text: text,
        color: color,
        time: time,
      });

      localStorage.setItem("items", JSON.stringify(state.items));
    },

    destroy: (state, action) => {
      const id = action.payload;
      console.log("id", id);
      state.items = state.items.filter((item) => item.id !== id);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    searchData: (state, action) => {
      state.search = action.payload.toLowerCase();
    },

    saveEditedNote: (state, action) => {
      const { id, text, color, time } = action.payload;
      const editedNote = state.items.find((item) => item.id === id);

      editedNote.text = text;
      editedNote.color = color;
      editedNote.time = time;

      state.edit = [];
      localStorage.setItem("items", JSON.stringify(state.items));
    },

    update: (state, action) => {
      const { id } = action.payload;
      state.edit = [...state.items];
      state.edit = state.edit.find((item) => item.id === id);
    },
  },
});

export const { addNote, destroy, searchData, update, saveEditedNote } =
  noteSlice.actions;
export default noteSlice.reducer;
export const selectNotes = (state) => state.notes.items;
