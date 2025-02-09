import s from "./EditModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import toast from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { editContact } from "../../redux/contacts/operations";

const EditModal = ({ id, name, number, onRequestClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = {
    name: name || "",
    number: number || "",
  };

  const handleSubmit = async (values, actions) => {
    const capitalizedName = (name) =>
      name
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");

    const updatedContact = {
      id,
      name: capitalizedName(values.name),
      number: values.number,
    };

    const isDuplicate = contacts.some(
      (contact) =>
        (contact.name.toLowerCase() === updatedContact.name.toLowerCase() ||
          contact.number === updatedContact.number) &&
        contact.id !== id
    );

    if (isDuplicate) {
      toast.error(
        "Contact with the same name or the same number already exists!"
      );
      return;
    }

    try {
      const res = await dispatch(editContact(updatedContact));
      if (!res.error) {
        toast.success("Contact updated successfully!");
        onRequestClose();
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update contact");
    }

    actions.setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^[+]?[\d\s-]+$/, "Invalid phone number format")
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  return (
    <div className={s.fixedOverlay}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className={s.modal}>
            <div className={s.form}>
              <label className={s.label}>Name</label>
              <Field
                className={s.inputField}
                type="text"
                name="name"
                placeholder="Enter name"
              />
              <ErrorMessage
                className={s.errorMessage}
                name="name"
                component="span"
              />
            </div>

            <div className={s.label}>
              <label className={s.label}>Number</label>
              <Field
                className={s.inputField}
                type="tel"
                name="number"
                placeholder="Enter phone number"
              />
              <ErrorMessage
                className={s.errorMessage}
                name="number"
                component="span"
              />
            </div>
            <div className={s.buttonWrapper}>
              <button
                className={`${s.button} ${s.saveButton}`}
                type="submit"
                disabled={isSubmitting}
              >
                Save Changes
              </button>
              <button
                className={`${s.button} ${s.cancelButton}`}
                type="button"
                onClick={onRequestClose}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditModal;
