import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./noteSlice";
import colorSlice from "./colorSlice";

export const store = configureStore({
  reducer: {
    notes: noteSlice,
    color: colorSlice,
  },
});
