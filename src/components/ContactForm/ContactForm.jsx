import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { addContact } from "../../redux/contacts/operations";
import { selectContacts } from "../../redux/contacts/selectors";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const capitalizedName = (name) => {
      return name
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    };

    const newContact = {
      id: values.id,
      name: capitalizedName(values.name),
      number: values.number,
    };

    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === newContact.name.toLowerCase() ||
        contact.number === newContact.number
    );

    if (isDuplicate) {
      toast.error("A contact with the same name or number already exists!");
      return;
    }

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const feedBackSchema = Yup.object().shape({
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
    <div className={s.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={feedBackSchema}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <div className={s.field}>
              <label className={s.label}>Name</label>
              <Field
                className={s.input}
                type="text"
                name="name"
                placeholder="Enter name"
              />
              <ErrorMessage className={s.error} name="name" component="span" />
            </div>

            <div className={s.field}>
              <label className={s.label}>Number</label>
              <Field
                className={s.input}
                type="tel"
                name="number"
                placeholder="Enter phone number"
              />
              <ErrorMessage
                className={s.error}
                name="number"
                component="span"
              />
            </div>

            <button className={s.btn} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding..." : "Add contact"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
