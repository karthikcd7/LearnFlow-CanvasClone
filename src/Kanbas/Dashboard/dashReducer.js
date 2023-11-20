import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";
import axios from "axios";
const initialState = {
  courses: db.courses,
  course: db.courses[0],
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: async (state, action) => {
      const response = await axios.post(URL, state.course);
      const newCourses = [...state.courses, { ...response.data, _id: new Date().getTime().toString() }];
      state.courses = newCourses;
    },
    deleteCourse: (state, action) => {
      const newCourses = state.courses.filter((course) => course._id !== action.payload);
      state.courses = newCourses;
    },
    updateCourse: (state, action) => {
      const newCourses = state.courses.map((item) => (item._id === action.payload._id ? action.payload : item));
      state.courses = newCourses;
      state.course = { title: "" };
    },
    setCourse: (state, action) => {
      console.log("dwejhfjhrufjlfjreiofhjf");
      console.log(action.payload);
      state.course = action.payload;
    },
  },
});
export const { addCourse, deleteCourse, updateCourse, setCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
