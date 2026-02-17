import { useState, useEffect } from "react";
import { CardContainer } from "../UI/Card.jsx";
import ModuleCard from "../entity/module/ModuleCard.jsx";

const Modules = () => {
  // Initialisation
  const apiURL = "https://softwarehub.uk/unibase/api";
  const myGroupEndpoint = `${apiURL}/modules`;

  // State
  const [modules, setModules] = useState(null);

  const apiGet = async (endpoint) => {
    const response = await fetch(endpoint);
    const result = await response.json();
    setModules(result);
  };

  useEffect(() => {
    apiGet(myGroupEndpoint);
  }, [myGroupEndpoint]);

  // Handlers
  // View
  return (
    <>
      <h1>Modules</h1>
      {!modules ? (
        <p>Loading Records...</p>
      ) : (
        <CardContainer>
          {modules.map((module) => (
            <ModuleCard key={module.ModuleID} module={module} />
          ))}
        </CardContainer>
      )}
    </>
  );
};

export default Modules;
