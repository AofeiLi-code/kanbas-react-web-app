import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="d-flex justify-content-between align-items-center mb-3">
      {/* Add Module Button */}
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger">
        <FaPlus className="me-2" />
        Module
      </button>

      {/* Publish All Dropdown */}
      <div className="dropdown d-inline me-2">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
              Unpublish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
              Unpublish modules only
            </a>
          </li>
        </ul>
      </div>

      {/* View Progress Button */}
      <button id="wd-view-progress" className="btn btn-lg btn-secondary mx-2">
        View Progress
      </button>

      {/* Collapse All Button */}
      <button id="wd-collapse-all" className="btn btn-lg btn-secondary mx-2">
        Collapse All
      </button>
    </div>
  );
}
