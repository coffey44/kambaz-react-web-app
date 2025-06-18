import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "../Database";

const initialState = {
  enrollments: initialEnrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, { payload }) => {
      if (!state.enrollments.some((e: any) => e.user === payload.user && e.course === payload.course)) {
        state.enrollments.push({
          _id: Date.now().toString(),
          user: payload.user,
          course: payload.course,
        });
      }
    },
    unenroll: (state, { payload }) => {

      state.enrollments = state.enrollments.filter(
        (e: any) => !(e.user === payload.user && e.course === payload.course)
      );
    },
  },
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;