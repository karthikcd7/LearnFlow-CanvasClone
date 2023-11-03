import { createSlice } from "@reduxjs/toolkit";
// import { useState } from "react";
import db from "../Database";
const initialState = {
  courses: db.courses
  ,
  course: db.courses[0],
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      console.log("i was here");
      const newCourses = [
          ...state.courses,
        { ...action.payload, _id: new Date().getTime().toString() },
      ];
      state.courses = newCourses;
      console.log(state.courses);
      
    },
    deleteCourse: (state, action) => {
      const newCourses = state.courses.filter((course) => course.id !== action.payload);
      state.courses = newCourses;
    },
    updateCourse: (state, action) => {
      const newCourses = state.courses.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.courses = newCourses;
      state.course = { title: "" };
    },
    setCourse: (state, action) => {
      state.course = action.payload;
    },
  },
});
export const { addCourse, deleteCourse, updateCourse, setCourse } = coursesSlice.actions;
export default coursesSlice.reducer;
