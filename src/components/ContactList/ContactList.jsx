import s from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FaRegGrimace } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { selectIsError } from "../../redux/contacts/selectors";
import { selectFilteredContactsMemo } from "../../redux/filters/selectors";
import { fetchContacts } from "../../redux/contacts/operations";
import Contact from "../Contact/Contact";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";

const ContactList = () => {
  const isError = useSelector(selectIsError);
  const filteredContacts = useSelector(selectFilteredContactsMemo);
  const dispatch = useDispatch();
  const [deleteModalId, setDeleteModalId] = useState(null);
  const [editModalId, setEditModalId] = useState(null);

  const isFetched = useRef(false);
  useEffect(() => {
    if (!isFetched.current) {
      dispatch(fetchContacts());
      isFetched.current = true;
    }
  }, [dispatch]);

  if (isError) {
    return <h2 className={s.errorMessage}>Something went wrong!</h2>;
  }

  if (filteredContacts.length === 0) {
    return (
      <div className={s.noContacts}>
        <FaRegGrimace className={s.gimIcon} />
        <p className={s.noText}>No contacts found. Try adding some!</p>
      </div>
    );
  }

  return (
    <>
      <ul className={s.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={s.item}>
            <Contact
              id={id}
              name={name}
              number={number}
              handleOpenDelete={() => setDeleteModalId(id)}
              handleOpenEdit={() => setEditModalId(id)}
            />
          </li>
        ))}
      </ul>

      {deleteModalId && (
        <DeleteModal
          id={deleteModalId}
          isOpen={!!deleteModalId}
          onRequestClose={() => setDeleteModalId(null)}
        />
      )}

      {editModalId && (
        <EditModal
          id={editModalId}
          isOpen={!!editModalId}
          onRequestClose={() => setEditModalId(null)}
        />
      )}
    </>
  );
};

export default ContactList;
