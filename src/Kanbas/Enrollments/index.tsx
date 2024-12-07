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
                try {
                    const data = await getEnrollmentsByUser(currentUser._id);

                    // 确保 data 是一个数组
                    const enrollments = Array.isArray(data) ? data : [];

                    const uniqueEnrollments = Array.from(
                        new Map(enrollments.map((item: any) => [item._id, item])).values()
                    );

                    dispatch(enroll(uniqueEnrollments));
                } catch (error) {
                    console.error("Error fetching enrollments:", error);
                }
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
