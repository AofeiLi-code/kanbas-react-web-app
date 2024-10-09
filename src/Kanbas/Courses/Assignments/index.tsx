import { FaPlusCircle, FaSearch } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link } from "react-router-dom"; 

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between mb-3">
        {/* Search for Assignments */}
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

        {/* Group and Assignment buttons */}
        <div>
          <button className="btn btn-primary me-2">
            + Group
          </button>
          <button className="btn btn-secondary">
            <FaPlusCircle /> Assignment
          </button>
        </div>
      </div>

      {/* Assignment List */}
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center justify-content-between border-start border-success border-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-3 fs-5 text-secondary" />
            <div>
              <Link to="/Kanbas/Courses/1234/Assignments/A1">
                <div className="fw-bold">A1 - ENV + HTML</div>
              </Link>
              Multiple Modules | Not available until May 6 | 100 pts
            </div>
          </div>
          <AssignmentControlButtons />
        </li>

        <li className="list-group-item d-flex align-items-center justify-content-between border-start border-success border-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-3 fs-5 text-secondary" />
            <div>
              <Link to="/Kanbas/Courses/1234/Assignments/A2">
                <div className="fw-bold">A2 - CSS + BOOTSTRAP</div>
              </Link>
              Multiple Modules | Not available until May 13 | 100 pts
            </div>
          </div>
          <AssignmentControlButtons />
        </li>

        <li className="list-group-item d-flex align-items-center justify-content-between border-start border-success border-3">
          <div className="d-flex align-items-center">
            <BsGripVertical className="me-3 fs-5 text-secondary" />
            <div>
              <Link to="/Kanbas/Courses/1234/Assignments/A3">
                <div className="fw-bold">A3 - JAVASCRIPT + REACT</div>
              </Link>
              Multiple Modules | Not available until May 20 | 100 pts
            </div>
          </div>
          <AssignmentControlButtons />
        </li>
      </ul>
    </div>
  );
}
