import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

const axiosWithCredentials = axios.create({ withCredentials: true });


export const findAssignmentsByCourse = async (courseId: string) => {
    try {
        const { data } = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/course/${courseId}`);
        return data;
    } catch (error) {
        console.error("Error fetching assignments by course:", error);
        throw error;
    }
};

export const findAssignmentById = async (assignmentId: string) => {
    try {
        const { data } = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${assignmentId}`);
        return data;
    } catch (error) {
        console.error("Error fetching assignment by ID:", error);
        throw error;
    }
};

export const deleteAssignment = async (assignmentId: string) => {
    try {
        const { data } = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
        return data;
    } catch (error) {
        console.error("Error deleting assignment:", error);
        throw error;
    }
};

export const updateAssignment = async (assignment: any) => {
    try {
        const { data } = await axiosWithCredentials.put(
            `${ASSIGNMENTS_API}/${assignment._id}`,
            assignment
        );
        return data;
    } catch (error) {
        console.error("Error updating assignment:", error);
        throw error;
    }
};

export const addAssignment = async (assignment: any) => {
    try {
        const { data } = await axiosWithCredentials.post(ASSIGNMENTS_API, assignment);
        return data;
    } catch (error) {
        console.error("Error adding assignment:", error);
        throw error;
    }
};