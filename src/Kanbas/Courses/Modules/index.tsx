import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from 'react-icons/bs';

export default function Modules() {
  return (
    <div>
      <ModulesControls /> {/* 调用上面调整后的控件，放置在顶部 */}
      <div className="clearfix"></div> {/* 确保浮动清理，避免重叠 */}

      <ul id="wd-modules" className="list-group rounded-0 mt-4">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> Learn what is Web Development </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
          </ul>
        </li>
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />
            Week 2
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1"> LEARNING OBJECTIVES </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
            <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
