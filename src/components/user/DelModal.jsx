import { TextField } from "@mui/material";
import { useState } from "react";
import { delItem } from "../../api/actions";
import { AiOutlineClose } from "react-icons/ai";

const DelModal = ({ boolToggle, setUser, user, toggleDel }) => {
  const [userInput, setUserInput] = useState("");
  const [delErr, setDelError] = useState(false);
  const [guestCheck, setGuestCheck] = useState(false);

  const delAccHandler = () => {
    if (user.username !== userInput) {
      setDelError(true);
      return;
    } else {
      if (user.username === "GuestUser") {
        setGuestCheck(true);
        return;
      }
      delItem(`/users/${user.username}`);
      setUser(null);
    }
  };

  const buttonText = () => {
    if (guestCheck) return "Guest Account can't be deleted";

    return delErr ? "Incorrect Username" : "Delete Account";
  };

  return (
    <div
      className="delete-modal change-modal"
      style={{ display: boolToggle ? "flex" : "none" }}
    >
      <div className="delete-modal__header">WARNING</div>
      <div className="delete-modal__confirmation-text">
        Deleting this account will also delete all associated comments and
        reviews.
      </div>
      <TextField
        id="standard-basic"
        variant="standard"
        placeholder="Type username to continue"
        style={{
          fontSize: ".8rem",

          borderRadius: "2px",
        }}
        error={delErr}
        onChange={({ target }) => setUserInput(target.value)}
      />
      <button onClick={delAccHandler}>{buttonText()}</button>
      <div onClick={toggleDel} className="modal-cancel-button">
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default DelModal;
