import { FaPlusCircle, FaSearch } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";


export default function Assignments() {
  const { cid } = useParams();  // Get current course ID
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between mb-3">
        <div className="input-group w-50">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search for Assignments"
          />
        </div>

        <div>
          <button className="btn btn-primary me-2">
            + Group
          </button>
          <button className="btn btn-secondary">
            <FaPlusCircle /> Assignment
          </button>
        </div>
      </div>

      <ul className="list-group">
        {courseAssignments.map(assignment => (
          <li key={assignment._id} className="list-group-item d-flex align-items-center justify-content-between border-start border-success border-3">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-3 fs-5 text-secondary" />
              <div>
                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  <div className="fw-bold">{assignment.title}</div>
                </Link>
              </div>
            </div>
            <AssignmentControlButtons />
          </li>
        ))}
      </ul>
    </div>
  );
}
