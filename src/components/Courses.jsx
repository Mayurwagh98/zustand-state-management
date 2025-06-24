import { useState } from "react";
import useAppStore from "../store/appStore";

const Courses = () => {
  const addCourse = useAppStore((state) => state.addCourse);
  const [newCourse, setNewCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addCourse({
      id: Math.ceil(Math.random() * 1000),
      title: newCourse,
    });
    setNewCourse("");
  };
  return (
    <div>
      <form className="flex">
        <input
          value={newCourse}
          placeholder="Enter your courses"
          className="p-2 mr-2 border border-e-white outline-0 rounded-md w-[300px]"
          onChange={(e) => setNewCourse(e.target.value)}
        />
        <button className="bg-purple-400 text-white" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Courses;
