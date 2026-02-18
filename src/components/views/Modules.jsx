import useLoad from "../api/useLoad.js";
import apiURL from "../api/apiURL.js";
import API from "../api/API.js";
import { Modal, useModal } from "../UI/Modal.jsx";
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
  const [modules, loadingMessage, loadModules] = useLoad(modulesEndpoint);
  const [isFormOpen, openForm, closeForm] = useModal(false);

  // Handlers
  const handleSubmit = async (module) => {
    const result = await API.post(postModuleEndpoint, module);
    if (result.isSuccess) {
      closeForm();
      loadModules(modulesEndpoint);
    } else alert(`Submission Unsuccessful: ${result.message}`);
  };

  // View
  return (
    <>
      <h1>Modules</h1>

      {isFormOpen && (
        <Modal title="Add New Module">
          <ModuleForm onSubmit={handleSubmit} onCancel={closeForm} />
        </Modal>
      )}

      <Spacer>
        <Action.Tray>
          <Action.Add showText buttonText="Add New Module" onClick={openForm} />
        </Action.Tray>

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
