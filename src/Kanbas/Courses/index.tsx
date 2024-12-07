import { FaAlignJustify } from "react-icons/fa";
import { Navigate, Route, Routes } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import { useParams, useLocation } from "react-router-dom";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People/Table";
import { useState, useEffect } from "react";
import * as client from "./client";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);

  const [users, setUsers] = useState<any[]>([]);

  const fetchUsersForCourse = async () => {
    if (cid) {
      try {
        const fetchedUsers = await client.findUsersForCourse(cid);
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users for course:", error);
      }
    }
  };

  useEffect(() => {
    fetchUsersForCourse();
  }, [cid]);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable users={users} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
