import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = {
  tasks: [],
  newTaskName: "",
  filter: "",
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    AddTask(state, action) {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: nanoid(),
            task: action.payload,
          },
        ],
      };
    },
    DeleteTask(state,action) {
        return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== action.payload),
          };
    },
    RenameTask(state,action){
        return {
            ...state,
            tasks: state.tasks.map((task) =>
              task.id === action.payload.id
                ? { ...task, task: action.payload.name }
                : task
            ),
          };
    },
    NewNameTask(state,action){
        return {
            ...state,
            newTaskName: action.payload,
          };
    },
    FilterTask(state,action){
        return {
            ...state,
            filter: action.payload,
          };
    } 
  },
});

export const {AddTask,DeleteTask,RenameTask,NewNameTask,FilterTask}=todoSlice.actions

export const todoReducer=todoSlice.reducer