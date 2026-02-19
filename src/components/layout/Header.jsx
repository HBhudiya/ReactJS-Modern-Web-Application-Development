import { useAuth } from "../auth/authContext.jsx";
import "./Header.scss";

const Header = () => {
  // Initialisation
  const { loggedInUser } = useAuth();

  // State
  // Handlers
  // View
  return (
    <header>
      <h1>Basic React Demo</h1>
      {loggedInUser && (
        <p className="welcome">Welcome {loggedInUser.UserFirstname}</p>
      )}
    </header>
  );
};

export default Header;
