import { useState, useEffect } from "react";
import { CardContainer, Card } from "../UI/Card.jsx";
import "./Modules.scss";

const Modules = () => {
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

  return (
    <>
      <h1>Modules</h1>
      {!modules ? (
        <p>Loading Records...</p>
      ) : (
        <CardContainer>
          {modules.map((module) => {
            return (
              <div className="moduleCard" key={module.ModuleID}>
                <Card>
                  <p>{module.ModuleCode}</p>
                  <p>{module.ModuleName}</p>
                  <img src={module.ModuleImageURL} alt={module.ModuleName} />
                </Card>
              </div>
            );
          })}
        </CardContainer>
      )}
    </>
  );
};

export default Modules;
