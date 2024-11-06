import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark"; // 确保正确导入 GreenCheckmark

export default function ModuleControlButtons({
    moduleId,
    deleteModule,
    editModule,
}: {
    moduleId: string;
    deleteModule: (moduleId: string) => void;
    editModule: (moduleId: string) => void;
}) {
    return (
        <div className="d-flex align-items-center float-end">
            <FaPencil
                onClick={() => editModule(moduleId)}
                className="text-primary me-2"
            />
            <FaTrash
                onClick={() => deleteModule(moduleId)}
                className="text-danger me-2"
            />
            <div className="me-3">
                <GreenCheckmark />
            </div>

            <BsPlus className="me-2" />
            <IoEllipsisVertical />
        </div>
    );
}
