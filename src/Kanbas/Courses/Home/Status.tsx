import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaHome, FaStream, FaBullhorn } from "react-icons/fa";
import { RiFilePaperLine, RiNotification2Line } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "300px" }}>
      <h2>Course Status</h2>

      {/* Unpublish and Publish Buttons */}
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </button>
        </div>
      </div>
      <br />

      {/* Import Existing Content */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </button>

      {/* Import from Commons */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </button>

      {/* Home Page */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaHome className="me-2 fs-5" /> Choose Home Page
      </button>

      {/* Course Stream */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaStream className="me-2 fs-5" /> View Course Stream
      </button>

      {/* Announcement */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <FaBullhorn className="me-2 fs-5" /> New Announcement
      </button>

      {/* Analytics */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <AiOutlineBarChart className="me-2 fs-5" /> New Analytics
      </button>

      {/* Course Notifications */}
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <RiNotification2Line className="me-2 fs-5" /> View Course Notifications
      </button>
    </div>
  );
}
