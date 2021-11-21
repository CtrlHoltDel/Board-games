const DeleteReviewModal = ({ toggleModal, delHandler }) => {
  return (
    <div className="del-modal">
      <div className="del-modal__header">About to delete, are you sure?</div>
      <div className="del-modal__buttons">
        <button
          onClick={delHandler}
          className="del-modal__buttons__confirm modal-button"
        >
          Yes i'm sure!
        </button>
        <button
          onClick={toggleModal}
          className="del-modal__buttons__deny modal-button"
        >
          No! Don't delete
        </button>
      </div>
    </div>
  );
};

export default DeleteReviewModal;
