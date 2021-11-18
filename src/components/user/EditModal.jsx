import { TextField } from "@mui/material";
import { useState } from "react";
import { patchUser } from "../../api/actions";
import { validateUrl } from "../../utils/utils";
import loadingImage from "../../image/loading.svg";

const EditModal = ({
  toggleEdit,
  boolToggle,
  user,
  setCurrentImage,
  setCurrentName,
}) => {
  const { username, avatar_url, name } = user;

  const [newAvatar, setNewAvatar] = useState("");
  const [newName, setNewName] = useState("");
  const [avatarError, setAvatarError] = useState(false);
  const [loading, setLoading] = useState(false);

  const confirmEdit = (e) => {
    e.preventDefault();

    if (!newAvatar && !newName) {
      toggleEdit();
      return;
    }

    const validateBool = validateUrl(newAvatar);

    if (!validateBool) {
      setAvatarError(true);
      return;
    }

    const submitObject = { name, avatar_url };

    if (newName) {
      submitObject.name = newName;
      setCurrentName(newName);
    }
    if (newAvatar) {
      submitObject.avatar_url = newAvatar;
      setCurrentImage(newAvatar);
    }
    setLoading(true);

    patchUser(`/users/${username}`, submitObject);

    setLoading(false);
    toggleEdit();
  };

  if (loading) {
    return (
      <div className="modal-loading">
        <img src={loadingImage} alt="" />
        <div className="">Editing user..</div>
      </div>
    );
  }

  return (
    <form
      className="edit-modal"
      style={{ display: boolToggle ? "flex" : "none" }}
    >
      <TextField
        className="edit-modal__input-field"
        size="small"
        label={avatarError ? "Avatar must be a jpg or png" : "Update Avatar"}
        variant="standard"
        error={avatarError}
        onChange={(e) => {
          setNewAvatar(e.target.value);
        }}
      />
      <TextField
        className="edit-modal__input-field"
        size="small"
        label={"Update Name"}
        variant="standard"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <div className="edit-modal__buttons">
        <button
          className="edit-modal__buttons__confirm edit-modal-button"
          onClick={confirmEdit}
        >
          Confirm
        </button>
        <button
          className="edit-modal__buttons__cancel edit-modal-button"
          onClick={(e) => {
            e.preventDefault();
            toggleEdit();
          }}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditModal;
