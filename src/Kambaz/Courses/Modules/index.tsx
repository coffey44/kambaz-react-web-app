import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { ListGroup, FormControl } from "react-bootstrap";
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const modules = useSelector((state: any) => state.modulesReducer.modules);
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
    setModuleName("");
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <div>
      <h4>Modules</h4>
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={createModuleForCourse}
      />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules.map((module: any) => (
          <ListGroup.Item key={module._id}>
            {!module.editing && module.name}
            {module.editing && (
              <FormControl
                className="w-50 d-inline-block"
                value={module.name}
                onChange={e =>
                  dispatch(updateModule({ ...module, name: e.target.value }))
                }
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    saveModule({ ...module, editing: false });
                  }
                }}
                autoFocus
              />
            )}
            <ModuleControlButtons
              moduleId={module._id}
              deleteModule={removeModule}
              editModule={moduleId => dispatch(editModule(moduleId))}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}