import { Card } from "../../UI/Card.jsx";
import "./UserCard.scss";

const UserCard = ({ user }) => {
  // Initialisation
  // State
  // Handlers
  // View
  return (
    <div className="userCard">
      <Card>
        <p>{user.UserEmail.substring(0, 8)}</p>
        <p>{`${user.UserFirstname} ${user.UserLastname}`}</p>
        <img src={user.UserImageURL} />
      </Card>
    </div>
  );
};

export default UserCard;
