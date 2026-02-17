import Action from "../../UI/Actions.jsx";
import "./ModuleForm.scss";

const ModuleForm = ({ onCancel }) => {
  return (
    <div className="moduleForm">
      <p>This is a Form!</p>
      <Action.Tray>
        <Action.Cancel showText buttonText="Cancel Form" onClick={onCancel} />
      </Action.Tray>
    </div>
  );
};

export default ModuleForm;
