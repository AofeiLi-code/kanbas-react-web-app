import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  setModules,
  addModule,
  editModule,
  updateModule,
  deleteModule,
} from "./reducer";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";
import * as coursesClient from "../client";
import * as modulesClient from "./client";

interface Module {
  _id: string;
  name: string;
  course: string;
  editing: boolean;
}

export default function Modules() {
  const { cid } = useParams();
  const [loading, setLoading] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const fetchModules = async () => {
    setLoading(true);
    try {
      const modules = await coursesClient.findModulesForCourse(cid as string);
      dispatch(setModules(modules));
    } catch (error) {
      console.error("Error fetching modules:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddModule = async () => {
    if (!cid || !moduleName.trim()) return;
    try {
      const newModule = { name: moduleName.trim(), course: cid };
      const createdModule = await coursesClient.createModuleForCourse(
        cid,
        newModule
      );
      dispatch(addModule(createdModule));
      setModuleName("");
    } catch (error) {
      console.error("Error adding module:", error);
    }
  };

  const handleDeleteModule = async (moduleId: string) => {
    try {
      await modulesClient.deleteModule(moduleId);
      dispatch(deleteModule(moduleId));
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  const handleSaveModule = async (module: Module) => {
    try {
      const updatedModule = await modulesClient.updateModule(module);
      dispatch(updateModule({ ...module, ...updatedModule, editing: false }));
    } catch (error) {
      console.error("Error saving module:", error);
    }
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={handleAddModule}
      />
      <ul id="wd-modules" className="list-group rounded-0 mt-4">
        {modules.map((module: Module) => (
          <li
            key={module._id}
            className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
          >
            <div className="d-flex justify-content-between align-items-center p-3 ps-2 bg-secondary">
              <div className="d-flex align-items-center">
                {!module.editing ? (
                  module.name
                ) : (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleSaveModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
              </div>

              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={handleDeleteModule}
                editModule={(moduleId) => dispatch(editModule(moduleId))}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
