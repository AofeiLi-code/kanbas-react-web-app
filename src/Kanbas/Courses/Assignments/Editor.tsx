import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentClient from "./client";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [form, setForm] = useState<any>({
        title: "",
        desc: "",
        points: "",
        due: "",
        available: "",
        until: "",
    });

    useEffect(() => {
        const fetchAssignment = async () => {
            if (aid) {
                try {
                    const selectedAssignment = await assignmentClient.getAssignmentById(aid);
                    setForm(selectedAssignment);
                } catch (error) {
                    console.error("Error fetching assignment:", error);
                }
            }
        };

        fetchAssignment();
    }, [aid]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    };

    const handleSave = async () => {
        try {
            if (aid) {

                const updatedAssignment = await assignmentClient.updateAssignment({ ...form, _id: aid });
                dispatch(updateAssignment(updatedAssignment));
            } else {
                if (!cid) {
                    console.error("Course ID is undefined.");
                    return;
                }

                const newAssignment = {
                    ...form,
                    _id: new Date().getTime().toString(),
                    course: cid,
                };
                const createdAssignment = await assignmentClient.addAssignment(newAssignment);
                dispatch(addAssignment(createdAssignment));
            }
            navigate(`/Kanbas/Courses/${cid}/Assignments`);
        } catch (error: any) {
            console.error("Error saving assignment:", error.response?.data || error.message);
        }
    };

    return (
        <div id="wd-assignments-editor">
            {/* Form Fields */}
            <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-5 col-form-label">
                    Assignment Name
                </label>
                <div className="col-sm-8">
                    <input type="text" className="form-control" id="title" value={form.title} onChange={handleChange} />
                </div>
            </div>

            <div className="mb-3 row">
                <div className="col-sm-8">
                    <textarea className="form-control" id="desc" rows={3} value={form.desc} onChange={handleChange} />
                </div>
            </div>

            <div className="mb-3 row py-2">
                <label htmlFor="points" className="col-sm-1 col-form-label">Points</label>
                <div className="col-sm-7">
                    <input type="text" className="form-control" id="points" value={form.points} onChange={handleChange} />
                </div>
            </div>

            <div className="row py-2">
                <label htmlFor="available" className="col-sm-2 col-form-label">Available From</label>
                <div className="col-sm-6">
                    <input type="date" className="form-control" id="available" value={form.available} onChange={handleChange} />
                </div>
            </div>

            <div className="row py-2">
                <label htmlFor="until" className="col-sm-2 col-form-label">Available Until</label>
                <div className="col-sm-6">
                    <input type="date" className="form-control" id="until" value={form.until} onChange={handleChange} />
                </div>
            </div>

            <div className="row py-2">
                <label htmlFor="due" className="col-sm-2 col-form-label">Due Date</label>
                <div className="col-sm-6">
                    <input type="date" className="form-control" id="due" value={form.due} onChange={handleChange} />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="row mt-5">
                <div className="col-8">
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <button onClick={handleSave} className="btn border border-dark btn-danger me-1 float-end">
                        Save
                    </button>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn border border-dark btn-secondary me-1 float-end">
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
}
