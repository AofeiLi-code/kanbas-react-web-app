import React, { useState } from 'react';

export default function AssignmentEditor() {
    // Mock data for Assignment A1
    const [assignment, setAssignment] = useState({
        name: "A1 - ENV + HTML",
        description: `The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
    The landing page should include the following:
    - Your full name and section
    - Links to each of the lab assignments
    - Link to the Kanbas application.`,
        points: 100,
        group: "ASSIGNMENTS",
        gradeType: "Percentage",
        submissionType: "Online",
        onlineOptions: ["Website URL"], // Preselected online option
        assignTo: "Everyone",
        dueDate: "2024-05-13",
        availableFrom: "2024-05-06",
        availableUntil: "2024-05-20",
    });

    // Helper function to toggle online entry options
    function handleOptionToggle(option: string) {
        setAssignment((prev) => {
            const options = [...prev.onlineOptions];
            if (options.includes(option)) {
                return { ...prev, onlineOptions: options.filter(opt => opt !== option) };
            } else {
                return { ...prev, onlineOptions: [...options, option] };
            }
        });
    }

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            {/* Assignment Name */}
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                <input
                    id="wd-name"
                    className="form-control"
                    value={assignment.name}
                    onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
                />
            </div>

            {/* Assignment Description */}
            <div className="mb-3">
                <label htmlFor="wd-description" className="form-label">Description</label>
                <textarea
                    id="wd-description"
                    className="form-control"
                    rows={5}
                    value={assignment.description}
                    onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
                />
            </div>

            {/* Points and Assignment Group */}
            <div className="row mb-3">
                <div className="col-4">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                    <input
                        id="wd-points"
                        className="form-control"
                        type="number"
                        value={assignment.points}
                        onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
                    />
                </div>
                <div className="col-4">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                    <select
                        id="wd-group"
                        className="form-select"
                        value={assignment.group}
                        onChange={(e) => setAssignment({ ...assignment, group: e.target.value })}
                    >
                        <option value="ASSIGNMENTS">Assignments</option>
                        <option value="QUIZZES">Quizzes</option>
                        <option value="PROJECTS">Projects</option>
                    </select>
                </div>
            </div>

            {/* Display Grade as */}
            <div className="row mb-3">
                <div className="col-4">
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
                    <select
                        id="wd-display-grade-as"
                        className="form-select"
                        value={assignment.gradeType}
                        onChange={(e) => setAssignment({ ...assignment, gradeType: e.target.value })}
                    >
                        <option value="Percentage">Percentage</option>
                        <option value="Points">Points</option>
                    </select>
                </div>
            </div>

            {/* Submission Type and Online Entry Options */}
            <div className="row mb-3">
                <div className="col-4">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                    <select
                        id="wd-submission-type"
                        className="form-select"
                        value={assignment.submissionType}
                        onChange={(e) => setAssignment({ ...assignment, submissionType: e.target.value })}
                    >
                        <option value="Online">Online</option>
                        <option value="On Paper">On Paper</option>
                        <option value="No Submission">No Submission</option>
                    </select>
                </div>
                <div className="col-8">
                    <label className="form-label">Online Entry Options</label><br />
                    <label>
                        <input
                            type="checkbox"
                            checked={assignment.onlineOptions.includes("Text Entry")}
                            onChange={() => handleOptionToggle("Text Entry")}
                        /> Text Entry
                    </label><br />
                    <label>
                        <input
                            type="checkbox"
                            checked={assignment.onlineOptions.includes("Website URL")}
                            onChange={() => handleOptionToggle("Website URL")}
                        /> Website URL
                    </label><br />
                    <label>
                        <input
                            type="checkbox"
                            checked={assignment.onlineOptions.includes("Media Recordings")}
                            onChange={() => handleOptionToggle("Media Recordings")}
                        /> Media Recordings
                    </label>
                </div>
            </div>

            {/* Dates */}
            <div className="row mb-3">
                <div className="col-4">
                    <label htmlFor="wd-due-date" className="form-label">Due Date</label>
                    <input
                        id="wd-due-date"
                        className="form-control"
                        type="date"
                        value={assignment.dueDate}
                        onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
                    />
                </div>
                <div className="col-4">
                    <label htmlFor="wd-available-from" className="form-label">Available From</label>
                    <input
                        id="wd-available-from"
                        className="form-control"
                        type="date"
                        value={assignment.availableFrom}
                        onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                    />
                </div>
                <div className="col-4">
                    <label htmlFor="wd-available-until" className="form-label">Available Until</label>
                    <input
                        id="wd-available-until"
                        className="form-control"
                        type="date"
                        value={assignment.availableUntil}
                        onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
                    />
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <button className="btn btn-light me-2" style={{ color: "black", border: "1px solid black" }}>
                    Cancel
                </button>
                <button className="btn btn-danger" style={{ color: "white" }}>
                    Save
                </button>
            </div>
        </div>
    );
}
