import { validateUrl } from "../../utils/utils";

const Preview = ({ title, body, imgUrl, username }) => {
  console.log(username);
  if (!imgUrl || !validateUrl(imgUrl))
    imgUrl =
      "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg";

  if (!body) body = "This is a preview of what the review will look like!";
  if (!title) title = "Preview Title";
  return (
    <>
      <h2 style={{ marginTop: "10px", textDecoration: "underline" }}>
        Preview
      </h2>
      <div className="preview-card">
        <img className="preview-card__img" src={imgUrl} alt="" srcset="" />
        <div className="preview-card__info">
          <div className="preview-card__info__title">{title}</div>
          <div className="preview-card__info__date">2 hours ago</div>
          <div className="preview-card__info__username">{username}</div>
        </div>
        <div className="preview-card__body">{body}</div>
      </div>
    </>
  );
};

export default Preview;
