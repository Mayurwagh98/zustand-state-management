import useAppStore from "../store/appStore";

const CourseList = () => {
  const courses = useAppStore((state) => state.courses);
  const removeCourse = useAppStore((state) => state.removeCourse);
  const toggleCourseStatus = useAppStore((state) => state.toggleCourseStatus);
  return (
    <div className="mt-4">
      {courses?.map((course) => (
        <div
          className="flex justify-between items-center bg-amber-600 m-2 p-2 rounded-md"
          key={course.id}
        >
          <input
            className="mr-2"
            type="checkbox"
            onChange={() => toggleCourseStatus(course.id)}
          />
          <h2>{course.title}</h2>
          <button onClick={() => removeCourse(course.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
