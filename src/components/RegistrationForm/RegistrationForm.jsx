import s from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { PasswordHide } from "../PasswordHide/PaswordHide";

const RegistrationForm = () => {
  const initialValues = { name: "", email: "", password: "" };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (values, actions) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    actions.resetForm();
  };

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  const feedBackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Name required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters long")
      .max(50, "Too long!")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .required("Password required"),
  });

  const { passwordVisibility, handlePasswordVisibility } = PasswordHide();

  return (
    <section className="container">
      <div className={s.container}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={feedBackSchema}
        >
          <Form className={s.form}>
            <button
              type="button"
              className={s.btn}
              onClick={() => navigate("/")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
              </svg>
            </button>
            <div>
              <h3 className={s.title}>Registration</h3>
              <p className={s.message}>
                Register now and get full access to our app.
              </p>
            </div>
            <label className={s.label}>
              <span className={s.span}>Name:</span>
              <Field
                name="name"
                type="text"
                className={s.input}
                placeholder="User"
              />
              <ErrorMessage className={s.error} name="name" component="span" />
            </label>
            <label className={s.label}>
              <span className={s.span}>Email:</span>
              <Field
                name="email"
                type="email"
                className={s.input}
                placeholder="user@example.com"
              />
              <ErrorMessage className={s.error} name="email" component="span" />
            </label>
            <label className={s.label}>
              <span className={s.span}>Password:</span>
              <div className={s.passwordWrapper}>
                <Field
                  name="password"
                  type={passwordVisibility ? "text" : "password"}
                  className={s.input}
                  placeholder="********"
                />
                <button
                  type="button"
                  className={s.iconButton}
                  onClick={handlePasswordVisibility}
                >
                  {passwordVisibility ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <ErrorMessage
                className={s.error}
                name="password"
                component="span"
              />
            </label>
            <div className={s.formControl}>
              <div className={s.formControl}>
                <label className={s.policy}>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className={s.checkBox}
                  />
                  <span className={s.policyText}>
                    I accept the terms and conditions of the
                    <a href="#" className={s.policyLink}>
                      Privacy Policy.
                    </a>
                  </span>
                </label>
              </div>

              <p className={s.signin}>
                Already have account?
                <Link className={s.link} to="/login">
                  Let`s login!
                </Link>
              </p>
            </div>

            <button
              className={`${s.button} ${isChecked ? "" : s.buttonDisabled}`}
              type="submit"
              disabled={!isChecked}
            >
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default RegistrationForm;
