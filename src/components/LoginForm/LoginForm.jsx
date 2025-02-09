import s from "./LoginForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { PasswordHide } from "../PasswordHide/PaswordHide";

const LoginForm = () => {
  const initialValues = { email: "", password: "" };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(loginThunk(values)).unwrap();

      const storedPath = localStorage.getItem("lastVisitedPage") || "/";
      localStorage.removeItem("lastVisitedPage");

      console.log("Navigating to:", storedPath);
      navigate(storedPath);
    } catch (error) {
      console.error("Login failed:", error);
    }
    actions.resetForm();
  };
  const feedBackSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email format"
      )
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
            <h3 className={s.title}>Login</h3>
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
              <div className={s.loginWrapper}>
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
            <button className={s.button} type="submit">
              Login
            </button>
            <div className={s.redir}>
              <p className={s.signinText}>Still don`t have an account? </p>
              <Link className={s.link} to="/register">
                Let`s register!
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default LoginForm;
