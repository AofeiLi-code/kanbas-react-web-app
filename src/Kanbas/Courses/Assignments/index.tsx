import { FaPlusCircle } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as assignmentClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const [assignments, setAssignments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAssignments() {
      try {
        if (!cid) {
          throw new Error("Course ID is undefined.");
        }
        const data = await assignmentClient.findAssignmentsByCourse(cid);
        setAssignments(data);
      } catch (err: any) {
        setError("Error fetching assignments. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchAssignments();
  }, [cid]);

  const handleDelete = async () => {
    if (assignmentToDelete) {
      try {
        await assignmentClient.deleteAssignment(assignmentToDelete);
        setAssignments(assignments.filter((a) => a._id !== assignmentToDelete));
        setAssignmentToDelete(null);
      } catch (err: any) {
        setError("Error deleting assignment. Please try again later.");
      }
    }
  };

  const cancelDelete = () => {
    setAssignmentToDelete(null);
  };

  if (loading) return <p>Loading assignments...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div id="wd-assignments">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Assignments</h4>
        <button
          className="btn btn-primary"
          onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
        >
          <FaPlusCircle className="me-2" />
          Add Assignment
        </button>
      </div>
      <ul className="list-group mt-3">
        {assignments.map((assignment: any) => (
          <li
            key={assignment._id}
            className="list-group-item d-flex align-items-center justify-content-between border-start border-success border-3"
          >
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
            <div className="d-flex align-items-center">
              <button
                className="btn btn-danger ms-2"
                onClick={() => setAssignmentToDelete(assignment._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {assignmentToDelete && (
        <div className="confirmation-dialog">
          <p>Are you sure you want to delete this assignment?</p>
          <button className="btn btn-danger me-2" onClick={handleDelete}>
            Yes
          </button>
          <button className="btn btn-secondary" onClick={cancelDelete}>
            No
          </button>
        </div>
      )}
    </div>
  );
}
