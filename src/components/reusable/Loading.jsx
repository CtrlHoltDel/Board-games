import loadingIcon from "../../image/loading.svg";

const Loading = ({ class_name, height = "500px" }) => {
  return (
    <div className={class_name} style={{ height }}>
      <img src={loadingIcon} alt="" />
    </div>
  );
};

export default Loading;
