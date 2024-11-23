import axios from "axios";
const ENROLLMENTS_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/enrollments`;

export const getEnrollmentsByUser = async (userId: string) => {
    const { data } = await axios.get(`${ENROLLMENTS_API}/user/${userId}`);
    return data;
};

export const createEnrollment = async (enrollment: { user: string; course: string }) => {
    const { data } = await axios.post(ENROLLMENTS_API, enrollment);
    return data;
};

export const deleteEnrollment = async (enrollmentId: string) => {
    await axios.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
};
