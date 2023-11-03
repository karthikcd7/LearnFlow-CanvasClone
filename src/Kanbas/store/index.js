import { configureStore } from "@reduxjs/toolkit";
import dashReducer from "../Dashboard/dashReducer";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";


const store = configureStore({
  reducer: {
    dashReducer,
    assignmentsReducer,
    modulesReducer,
  }
  
});


export default store;