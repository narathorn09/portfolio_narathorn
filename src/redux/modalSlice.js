import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    urlImg: "",
    countImg: 0,
    title: "",
  },
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    setUrlImg: (state, action) => {
      state.urlImg = action.payload.url;
      state.countImg = action.payload.count;
      state.title = action.payload.title;
    },
    removeData: (state, action) => {
      state.urlImg = "";
      state.countImg = 0;
      state.title = "";
    },
  },
});

export const getIsOpen = (state) => state.modal.isOpen;
export const getUrl = (state) => state.modal.urlImg;
export const getCountImg = (state) => state.modal.countImg;
export const getTitle = (state) => state.modal.title;

export const { setIsOpen, setUrlImg, removeData } = modalSlice.actions;
export default modalSlice.reducer;
