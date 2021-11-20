import { useState } from "react";
import { TextField } from "@mui/material";
import { validateUrl } from "../../utils/utils";
import Preview from "./Preview";

const ReviewForm = ({ onSubmit, categories, username }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [imgError, setImageError] = useState(false);

  const [category, setCategory] = useState(categories[0]);

  const onInitialSubmit = async (e) => {
    e.preventDefault();
    const urlValidation = validateUrl(imgUrl, setImageError);

    if (!title.length) {
      setTitleError(true);
    }
    if (!body.length) {
      setBodyError(true);
    }

    if (!urlValidation) {
      setImageError(true);
    }

    if (!title.length || !body.length || !urlValidation) return;

    await onSubmit(title, body, category, "unknown", imgUrl);

    setTitle("");
    setBody("");
    setImgUrl("");
  };

  return (
    <form onSubmit={onInitialSubmit} className="add-review__form">
      <TextField
        className="add-review__form__input"
        label="Title"
        variant="filled"
        error={titleError}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setTitleError(false);
        }}
      />
      <div className="add-review__form__break"></div>
      <TextField
        className="add-review__form__input"
        label="Body"
        variant="filled"
        error={bodyError}
        value={body}
        onChange={(e) => {
          setBody(e.target.value);
          setBodyError(false);
        }}
      />
      <div className="add-review__form__break"></div>
      <TextField
        className="add-review__form__input"
        label="Image Url"
        variant="filled"
        value={imgUrl}
        error={imgError}
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      />
      {imgError && (
        <div style={{ fontSize: ".8rem", color: "red", marginTop: "4px" }}>
          Must be empty or a jpeg/png.
        </div>
      )}
      <div className="add-review__form__break"></div>
      <select
        className="add-review__form__dropdown"
        name=""
        id=""
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      >
        {categories.map((category) => {
          return <option key={category}>{category}</option>;
        })}
      </select>
      <Preview title={title} body={body} imgUrl={imgUrl} username={username} />
      <button className="add-review__form__submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
