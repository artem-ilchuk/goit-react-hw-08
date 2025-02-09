import { NavLink } from "react-router-dom";
import s from "./MobMenu.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { IoCloseCircleOutline } from "react-icons/io5";

const MobMenu = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  if (!isOpen) return null;

  return (
    <div className={s.overlay} onClick={onRequestClose}>
      <div className={s.menu} onClick={(e) => e.stopPropagation()}>
        <div className={s.head}>
          <div className={s.label}>
            <img
              className={s.logo}
              src="/src/assets/Logo.webp"
              alt="Logo image"
            />
            <div className={s.titleContainer}>
              <h2 className={s.title}>Phonebook</h2>
              <p className={s.subtitle}>Seamless Connections</p>
            </div>
          </div>

          <IoCloseCircleOutline className={s.button} onClick={onRequestClose} />
        </div>

        {isLoggedIn ? (
          <div className={s.navCont}>
            <div className={s.greet}>
              <h2 className={s.welcome}>Welcome </h2>
              <h3 className={s.welcome}>{user.name}!</h3>
            </div>
            <nav className={s.nav}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? s.navLinkActive : s.navLink
                }
                to="/"
                onClick={onRequestClose}
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? s.navLinkActive : s.navLink
                }
                to="/contacts"
                onClick={onRequestClose}
              >
                Contacts
              </NavLink>
            </nav>

            <button
              className={s.logoutButton}
              onClick={() => dispatch(logoutThunk())}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className={s.menuItems}>
            <h3 className={s.text}>
              Hello!To get started, simply sign up or log in to your account.
            </h3>
            <div className={s.register}>
              <NavLink
                className={s.navLink}
                to="/register"
                onClick={onRequestClose}
              >
                Register
              </NavLink>
              <NavLink
                className={s.navLink}
                to="/login"
                onClick={onRequestClose}
              >
                Login
              </NavLink>
            </div>
          </div>
        )}

        <div className={s.base}>
          <h6 className={s.contactsTitle}>Our contacts:</h6>
          <nav className={s.contactLinks}>
            <div className={s.contactLink}>
              <a
                href="https://mail.google.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={s.contactIcon}
                  src="/src/assets/free-icon-email-4698704.png"
                  alt="Email"
                />
              </a>
              <a
                href="https://github.com/artem-ilchuk"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={s.contactIcon}
                  src="/src/assets/icons8-github-64.png"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://vercel.com/artems-projects-9aad7290"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={s.contactIcon}
                  src="/src/assets/code-examples-vercel(1).jpg"
                  alt="Vercel"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/artem-ilchuk-3b0944315/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={s.contactIcon}
                  src="/src/assets/free-icon-linkedin-3536505.png"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </nav>

          <div className={s.footerFooter}>
            <p className={s.footerCopyright}>
              © Copyright 2025. Made by DEVELOPER STUDIO Ltd.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobMenu;
