import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "color",
  initialState: {
    startColor: "#f7b801",
    colors: [
      {
        id: 1,
        code: "#e63946",
        selected: false,
      },
      {
        id: 2,
        code: "#ffbe0b",
        selected: true,
      },
      {
        id: 3,
        code: "#5f0f40",
        selected: false,
      },
      {
        id: 4,
        code: "#ff99c8",
        selected: false,
      },
      {
        id: 5,
        code: "#f94144",
        selected: false,
      },
      {
        id: 6,
        code: "#a7c957",
        selected: false,
      },
      {
        id: 7,
        code: "#ef233c",
        selected: false,
      },
    ],
  },
  reducers: {
    firstColor: (state, action) => {
      state.startColor = action.payload;
    },
    selectColor: (state, action) => {
      state.colors.forEach((color) => {
        color.selected = false;
      });
      const selectedColor = state.colors.find(
        (color) => color.code === action.payload
      );

      selectedColor.selected = true;
    },
  },
});

export const { firstColor, selectColor } = colorSlice.actions;
export default colorSlice.reducer;
