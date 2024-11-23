import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEnrollmentsByUser, createEnrollment, deleteEnrollment } from "./client";
import { enroll, unenroll } from "./reducer";

export default function Enrollments() {
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchEnrollments = async () => {
            if (currentUser?._id) {
                const data = await getEnrollmentsByUser(currentUser._id);

                const uniqueEnrollments = Array.from(
                    new Map(data.map((item: any) => [item._id, item])).values()
                );

                dispatch(enroll(uniqueEnrollments));
            }
        };
        fetchEnrollments();
    }, [currentUser, dispatch]);
    const handleEnroll = async (courseId: string) => {
        const exists = enrollments.some((enrollment: any) => enrollment.course === courseId);
        if (exists) {
            console.warn("Already enrolled in this course.");
            return;
        }

        const newEnrollment = await createEnrollment({ user: currentUser._id, course: courseId });
        dispatch(enroll(newEnrollment));
    };

    const handleUnenroll = async (enrollmentId: string) => {
        await deleteEnrollment(enrollmentId);
        dispatch(unenroll({ _id: enrollmentId }));
    };

    return (
        <div>
            <h2>Your Enrollments</h2>
            <ul>
                {enrollments.map((enrollment: any) => (
                    <li key={enrollment._id}>
                        Course ID: {enrollment.course}
                        <button onClick={() => handleUnenroll(enrollment._id)}>Unenroll</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => handleEnroll("NEW_COURSE_ID")}>Enroll in New Course</button>
        </div>
    );
}
