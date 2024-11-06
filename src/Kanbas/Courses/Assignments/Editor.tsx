import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as db from "../../Database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);

    const [form, setForm] = useState<any>({
        title: "",
        desc: "",
        points: "",
        due: "",
        available: "",
        until: ""
    });


    useEffect(() => {
        if (aid) {
            const selectedAssignment = assignments.find((assignment: any) => assignment._id === aid);
            if (selectedAssignment) setForm(selectedAssignment);
        }
    }, [aid, assignments]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setForm({ ...form, [id]: value });
    };


    const handleSave = () => {
        if (aid) {

            dispatch(updateAssignment({ ...form, _id: aid }));
        } else {

            const newAssignment = { ...form, _id: new Date().getTime().toString(), course: cid };
            dispatch(addAssignment(newAssignment));
        }
        navigate(`/Kanbas/Courses/${cid}/Assignments`);
    };

    return (
        <div id="wd-assignments-editor">
            <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-5 col-form-label">Assignment Name</label>
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

            <div className="row mt-5">
                <div className="col-8">
                    <hr />
                </div>
            </div>

            <div className="row">
                <div className="col-8">
                    <button onClick={handleSave} className="btn border border-dark btn-danger me-1 float-end">Save</button>
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn border border-dark btn-secondary me-1 float-end">Cancel</Link>
                </div>
            </div>
        </div>
    );
}
