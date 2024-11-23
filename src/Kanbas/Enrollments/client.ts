import axios from "axios";
const ENROLLMENTS_API = `${process.env.REACT_APP_REMOTE_SERVER}/api/enrollments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

export const getEnrollmentsByUser = async (userId: string) => {
    const { data } = await axiosWithCredentials.get(`${ENROLLMENTS_API}/user/${userId}`);
    return data;
};

export const createEnrollment = async (enrollment: { user: string; course: string }) => {
    const { data } = await axiosWithCredentials.post(ENROLLMENTS_API, enrollment);
    return data;
};

export const deleteEnrollment = async (enrollmentId: string) => {
    await axiosWithCredentials.delete(`${ENROLLMENTS_API}/${enrollmentId}`);
};
