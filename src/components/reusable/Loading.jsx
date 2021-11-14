import loadingIcon from "../../image/loading.svg";

const Loading = ({ class_name }) => {
  return (
    <div className={class_name}>
      <img src={loadingIcon} alt="" srcset="" />
    </div>
  );
};

export default Loading;
