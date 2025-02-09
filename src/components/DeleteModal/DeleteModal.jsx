import s from "./DeleteModal.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const DeleteModal = ({ id, isOpen, onRequestClose }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(id)).unwrap();
      onRequestClose();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className={s.fixedOverlay}>
      <div className={s.modal}>
        <div className={s.modalContent}>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className={s.icon}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              fillRule="evenodd"
            ></path>
          </svg>
          <h2 className={s.modalTitle}>Are you sure?</h2>
          <p className={s.modalText}>
            Do you really want to continue? This will delete the contact!
          </p>
        </div>
        <div className={s.buttonWrapper}>
          <button onClick={onRequestClose} className={s.cancelButton}>
            Cancel
          </button>
          <button onClick={handleDelete} className={s.confirmButton}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
