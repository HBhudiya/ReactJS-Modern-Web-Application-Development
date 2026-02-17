import { useState, useEffect } from "react";
import Spacer from "../UI/Spacer.jsx";
import Action from "../UI/Actions.jsx";
import ModuleForm from "../entity/module/ModuleForm.jsx";
import { CardContainer } from "../UI/Card.jsx";
import ModuleCard from "../entity/module/ModuleCard.jsx";

const Modules = () => {
  // Initialisation
  const apiURL = "https://softwarehub.uk/unibase/api";
  const modulesEndpoint = `${apiURL}/modules`;
  const postModuleEndpoint = `${apiURL}/modules`;

  // State
  const [modules, setModules] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setModules(result);
  };

  useEffect(() => {
    apiGet(modulesEndpoint);
  }, [modulesEndpoint]);

  const apiPOST = async (endpoint, record) => {
    // Build a request object
    const request = {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    };

    // Call the fetch
    const response = await fetch(endpoint, request);
    const result = await response.json();

    return response.status >= 200 && response.status < 300
      ? { isSuccess: true }
      : { isSuccess: false, message: result.message };
  };

  // Handlers
  const handleAdd = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleSubmit = async (module) => {
    const result = await apiPOST(postModuleEndpoint, module);
    if (result.isSuccess) {
      setShowForm(false);
      apiGet(modulesEndpoint);
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
          <p>Loading Records...</p>
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
