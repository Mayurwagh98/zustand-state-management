import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [...state.courses, course],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => {
      state.courses.filter((course) => course.id !== courseId);
    });
  },
});

const useAppStore = create(devtools(persist(courseStore, { name: "courses" })));

export default useAppStore;
