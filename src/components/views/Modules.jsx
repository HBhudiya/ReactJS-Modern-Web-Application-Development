import { useState, useEffect } from "react";
import useLoad from "../api/useLoad.js";
import apiURL from "../api/apiURL.js";
import API from "../api/API.js";
import Spacer from "../UI/Spacer.jsx";
import Action from "../UI/Actions.jsx";
import ModuleForm from "../entity/module/ModuleForm.jsx";
import { CardContainer } from "../UI/Card.jsx";
import ModuleCard from "../entity/module/ModuleCard.jsx";

const Modules = () => {
  // Initialisation
  const modulesEndpoint = `${apiURL}/modules`;
  const postModuleEndpoint = `${apiURL}/modules`;

  // State
  const [showForm, setShowForm] = useState(false);
  const [modules, loadingMessage, loadModules] = useLoad(modulesEndpoint);

  // Handlers
  const handleAdd = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleSubmit = async (module) => {
    const result = await API.post(postModuleEndpoint, module);
    if (result.isSuccess) {
      setShowForm(false);
      loadModules(modulesEndpoint);
    } else alert(`Submission Unsuccessful: ${result.message}`);
  };

  // View
  return (
    <>
      <h1>Modules</h1>

      <Spacer>
        {!showForm ? (
          <Action.Tray>
            <Action.Add
              showText
              buttonText="Add New Module"
              onClick={handleAdd}
            />
          </Action.Tray>
        ) : (
          <ModuleForm onSubmit={handleSubmit} onCancel={handleCancel} />
        )}

        {!modules ? (
          <p>{loadingMessage}</p>
        ) : (
          <CardContainer>
            {modules.map((module) => (
              <ModuleCard key={module.ModuleID} module={module} />
            ))}
          </CardContainer>
        )}
      </Spacer>
    </>
  );
};

export default Modules;
