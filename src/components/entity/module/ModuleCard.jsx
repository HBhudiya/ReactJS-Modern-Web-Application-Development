import { Card } from "../../UI/Card.jsx";
import "./ModuleCard.scss";

const ModuleCard = ({ module }) => {
  // Initialisation
  // State
  // Handlers
  // View
  return (
    <div className="moduleCard">
      <Card>
        <p>{module.ModuleCode}</p>
        <p>{module.ModuleName}</p>
        <img src={module.ModuleImageURL} alt={module.ModuleName} />
      </Card>
    </div>
  );
};

export default ModuleCard;
