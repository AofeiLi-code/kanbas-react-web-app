import React from "react";
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  const courseUsers = users.filter(user =>
    enrollments.some(enrollment => enrollment.user === user._id && enrollment.course === cid)
  );

  return (
    <div id="wd-people-table">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {courseUsers.map(user => (
            <tr key={user._id}>
              <td>
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                {user.firstName} {user.lastName}
              </td>
              <td>{user.loginId}</td>
              <td>{user.section}</td>
              <td>{user.role}</td>
              <td>{user.lastActivity}</td>
              <td>{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
