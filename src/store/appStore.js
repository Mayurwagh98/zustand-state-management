import { create } from "zustand";

const courseStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [...state.course, course],
    }));
  },
});

const useAppStore = create(courseStore);

export default useAppStore;
