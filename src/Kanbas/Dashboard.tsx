import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRole from "./Enrollments/Protected";
import { enroll, unenroll } from "./Enrollments/reducer";

export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const [showOnlyEnrolled, setShowOnlyEnrolled] = useState(false);
    const dispatch = useDispatch();

    
    function isEnrolledInCourse(courseId: string) {
        return enrollments.some(
            (enrollment: { user: string; course: string }) =>
                enrollment.user === currentUser?._id && enrollment.course === courseId
        );
    }

   
    function enrollCourse(courseId: string) {
        dispatch(
            enroll({
                user: currentUser?._id,
                course: courseId,
                _id: new Date().getTime().toString(),
            })
        );
    }

    
    function unenrollCourse(courseId: string) {
        dispatch(
            unenroll({
                user: currentUser?._id,
                course: courseId,
            })
        );
    }

    return (
        <div id="wd-dashboard">
            <div className="row">
                <div className="col">
                    <h1 id="wd-dashboard-title">Dashboard</h1>
                </div>
                <div className="col text-end">
                    <ProtectedRole role="STUDENT">
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowOnlyEnrolled(!showOnlyEnrolled)}
                        >
                            {showOnlyEnrolled ? "Show All Courses" : "Show Enrolled Only"}
                        </button>
                    </ProtectedRole>
                </div>
            </div>
            <ProtectedRole role="FACULTY">
                <div>
                    <h5>
                        New Course
                        <input
                            value={course.name}
                            className="form-control mb-2"
                            onChange={(e) => setCourse({ ...course, name: e.target.value })}
                        />
                        <textarea
                            value={course.description}
                            className="form-control"
                            onChange={(e) =>
                                setCourse({ ...course, description: e.target.value })
                            }
                        />
                    </h5>
                    <button
                        className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse}
                    >
                        Add
                    </button>
                    <button
                        className="btn btn-warning float-end me-2"
                        id="wd-update-course-click"
                        onClick={updateCourse}
                    >
                        Update
                    </button>
                    <hr />
                </div>
            </ProtectedRole>

            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses
                        .filter(course => !showOnlyEnrolled || isEnrolledInCourse(course._id))
                        .map(course => (
                            <div
                                key={course._id}
                                className="wd-dashboard-course col"
                                style={{ width: "300px" }}
                            >
                                <div className="card rounded-3 overflow-hidden">
                                    <Link
                                        to={`/Kanbas/Courses/${course._id}/Home`}
                                        className="wd-dashboard-course-link text-decoration-none text-dark"
                                    >
                                        <img
                                            src="/images/reactjs.jpg"
                                            width="100%"
                                            height={160}
                                            alt={course.name}
                                        />
                                        <div className="card-body">
                                            <h5 className="wd-dashboard-course-title card-title">
                                                {course.name}
                                            </h5>
                                            <p
                                                className="wd-dashboard-course-title card-text overflow-y-hidden"
                                                style={{ maxHeight: 100 }}
                                            >
                                                {course.description}
                                            </p>
                                            <button className="btn btn-primary">Go</button>

                                            <ProtectedRole role="FACULTY">
                                                <button
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        deleteCourse(course._id);
                                                    }}
                                                    className="btn btn-danger float-end"
                                                    id="wd-delete-course-click"
                                                >
                                                    Delete
                                                </button>
                                                <button
                                                    id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end"
                                                >
                                                    Edit
                                                </button>
                                            </ProtectedRole>

                                            <ProtectedRole role="STUDENT">
                                                {isEnrolledInCourse(course._id) ? (
                                                    <button
                                                        className="btn btn-danger mx-2"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            unenrollCourse(course._id);
                                                        }}
                                                    >
                                                        Unenroll
                                                    </button>
                                                ) : (
                                                    <button
                                                        className="btn btn-success mx-2"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            enrollCourse(course._id);
                                                        }}
                                                    >
                                                        Enroll
                                                    </button>
                                                )}
                                            </ProtectedRole>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
