import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });

    const [module, setModule] = useState({
        id: 1,
        name: "NodeJS Module",
        description: "Introduction to Node.js and Express.js",
        course: "Web Development",
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div>
            <h3 id="wd-working-with-objects">Working With Objects</h3>

            {/* Assignment Section */}
            <h4>Assignment Operations</h4>

            {/* Update Assignment Title */}
            <h5>Update Assignment Title</h5>
            <a
                id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
            >
                Update Title
            </a>
            <input
                className="form-control w-75"
                id="wd-assignment-title"
                defaultValue={assignment.title}
                onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })
                }
            />
            <hr />

            {/* Update Assignment Score */}
            <h5>Update Assignment Score</h5>
            <input
                type="number"
                className="form-control w-25"
                id="wd-assignment-score"
                value={assignment.score}
                onChange={(e) =>
                    setAssignment({ ...assignment, score: parseInt(e.target.value) })
                }
            />
            <a
                id="wd-update-assignment-score"
                className="btn btn-warning mt-2"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
            >
                Update Score
            </a>
            <hr />

            {/* Update Assignment Completion */}
            <h5>Update Assignment Completed</h5>
            <input
                type="checkbox"
                className="form-check-input"
                id="wd-assignment-completed"
                checked={assignment.completed}
                onChange={(e) =>
                    setAssignment({ ...assignment, completed: e.target.checked })
                }
            />
            <a
                id="wd-update-assignment-completed"
                className="btn btn-success mt-2"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
            >
                Update Completed
            </a>
            <hr />

            {/* Module Section */}
            <h4>Module Operations</h4>

            {/* Get Module */}
            <h5>Retrieve Module</h5>
            <a
                id="wd-retrieve-module"
                className="btn btn-primary"
                href={`${MODULE_API_URL}`}
            >
                Get Module
            </a>
            <hr />

            {/* Update Module Name */}
            <h5>Update Module Name</h5>
            <input
                className="form-control w-50"
                id="wd-module-name"
                value={module.name}
                onChange={(e) => setModule({ ...module, name: e.target.value })}
            />
            <a
                id="wd-update-module-name"
                className="btn btn-primary mt-2"
                href={`${MODULE_API_URL}/name/${module.name}`}
            >
                Update Name
            </a>
            <hr />

            {/* Update Module Description */}
            <h5>Update Module Description</h5>
            <input
                className="form-control w-50"
                id="wd-module-description"
                value={module.description}
                onChange={(e) =>
                    setModule({ ...module, description: e.target.value })
                }
            />
            <a
                id="wd-update-module-description"
                className="btn btn-danger mt-2"
                href={`${MODULE_API_URL}/description/${module.description}`}
            >
                Update Description
            </a>
            <hr />
        </div>
    );
}
