import { FaPlusCircle, FaSearch } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentControls from "./AssignmentControls";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment } from "./reducer";
import { useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();

  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);
  const haveEditAccess = currentUser.role === "FACULTY";
  const courseAssignments = assignments.filter((assignment: any) => assignment.course === cid);

  const handleDelete = () => {
    if (assignmentToDelete) {
      dispatch(deleteAssignment(assignmentToDelete));
      setAssignmentToDelete(null);
    }
  };

  const cancelDelete = () => {
    setAssignmentToDelete(null);
  };

  return (
    <div id="wd-assignments">
      {haveEditAccess && <AssignmentControls />}

      <ul className="list-group mt-3">
        {courseAssignments.map((assignment: any) => (
          <li key={assignment._id} className="list-group-item d-flex align-items-center justify-content-between border-start border-success border-3">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-3 fs-5 text-secondary" />
              <div>
                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  <div className="fw-bold">{assignment.title}</div>
                </Link>
                <p className="mb-0">
                  <span className="text-danger">Multiple Modules</span> |
                  <span className="fw-bold"> Available:</span> {assignment.available} |
                  <span className="fw-bold"> Due:</span> {assignment.due} |
                  {assignment.points} pts
                </p>
              </div>
            </div>
            {haveEditAccess && (
              <div className="d-flex align-items-center">
                <AssignmentControlButtons />
                <button className="btn btn-danger ms-2" onClick={() => setAssignmentToDelete(assignment._id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>

      {assignmentToDelete && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this assignment?</p>
          <button className="btn btn-danger me-2" onClick={handleDelete}>Yes</button>
          <button className="btn btn-secondary" onClick={cancelDelete}>No</button>
        </div>
      )}
    </div>
  );
}
