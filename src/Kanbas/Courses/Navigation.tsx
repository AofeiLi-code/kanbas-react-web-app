import { Link } from "react-router-dom";

export default function CoursesNavigation({ currentCourseId = "1234"}: { currentCourseId: string }) {
  return (
    <div id="wd-courses-navigation">
      <Link id="wd-course-home-link" to={`/Kanbas/Courses/${currentCourseId}/Home`}>Home</Link><br />
      <Link id="wd-course-modules-link" to={`/Kanbas/Courses/${currentCourseId}/Modules`}>Modules</Link><br />
      <Link id="wd-course-piazza-link" to={`/Kanbas/Courses/${currentCourseId}/Piazza`}>Piazza</Link><br />
      <Link id="wd-course-zoom-link" to={`/Kanbas/Courses/${currentCourseId}/Zoom`}>Zoom</Link><br />
      <Link id="wd-course-quizzes-link" to={`/Kanbas/Courses/${currentCourseId}/Assignments`}>Assignments</Link><br />
      <Link id="wd-course-assignments-link" to={`/Kanbas/Courses/${currentCourseId}/Quizzes`}>Quizzes</Link><br />
      <Link id="wd-course-grades-link" to={`/Kanbas/Courses/${currentCourseId}/Grades`}>Grades</Link><br />
      <Link id="wd-course-people-link" to={`/Kanbas/Courses/${currentCourseId}/People`}>People</Link><br />
    </div>
  );
}
