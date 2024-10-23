import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import * as db from "../../Database"; 

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  return (
    <div>
      <ModulesControls />
      <div className="clearfix"></div>

      <ul id="wd-modules" className="list-group rounded-0 mt-4">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li key={module.id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson.id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

