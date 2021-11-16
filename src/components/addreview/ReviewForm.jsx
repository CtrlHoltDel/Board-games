import { useState } from "react";
import { TextField } from "@mui/material";

const ReviewForm = ({ onSubmit, categories }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [designer, setDesigner] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [category, setCategory] = useState(categories[0]);

  const onInitialSubmit = async (e) => {
    e.preventDefault();
    if (!title.length) {
      setTitleError(true);
    }
    if (!body.length) {
      setBodyError(true);
    }

    if (!title.length || !body.length) return;

    await onSubmit(title, body, category, designer, imgUrl);

    setTitle("");
    setBody("");
    setDesigner("");
    setImgUrl("");
  };

  return (
    <form onSubmit={onInitialSubmit} className="add-review__form">
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
        error={bodyError}
        value={imgUrl}
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      />
      <div className="add-review__form__break"></div>
      <TextField
        className="add-review__form__input"
        label="Designer"
        variant="filled"
        value={designer}
        error={bodyError}
        onChange={(e) => {
          setDesigner(e.target.value);
        }}
      />
      <button className="add-review__form__submit">Submit</button>
    </form>
  );
};

export default ReviewForm;