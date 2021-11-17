import { TextField } from "@mui/material";
import { useState } from "react";
import { delItem } from "../../api/actions";

const DelModal = ({ toggle, setUser, user }) => {
  const [userInput, setUserInput] = useState("");
  const [delErr, setDelError] = useState(false);
  const [guestCheck, setGuestCheck] = useState(false);

  const delAccHandler = () => {
    if (user.username === "GuestUser") {
      setGuestCheck(true);
      return;
    }

    if (user.username !== userInput) {
      setDelError(true);
      return;
    } else {
      delItem(`/users/${user.username}`);
      setUser(null);
    }
  };

  const buttonText = () => {
    if (guestCheck) return "Guest Account can't be deleted";

    return delErr ? "Incorrect Username" : "Delete Account";
  };

  return (
    <div className="delete-modal" style={{ display: toggle ? "flex" : "none" }}>
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
    </div>
  );
};

export default DelModal;
