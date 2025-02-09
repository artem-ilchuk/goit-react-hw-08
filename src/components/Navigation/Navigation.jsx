import s from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  selectIsLoggedIn,
  selectTheme,
  selectUser,
} from "../../redux/auth/selectors";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Toggle } from "../Toggleswitch/TogleSwitch";
import { themeToggle } from "../../redux/auth/slice";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <header className={s.navigation}>
      <img className={s.logo} src={"/src/assets/Logo.webp"} alt="Logo image" />
      <div className={s.titleContainer}>
        <h2 className={s.title}>Phonebook</h2>
        <p className={s.subtitle}>Seamless Connections</p>
      </div>
      <div className={s.navCont}>
        <nav
          className={clsx({
            [s.nav]: windowWidth >= 768,
            [s.hidden]: windowWidth > 319 || windowWidth < 768,
          })}
        >
          <NavLink
            className={({ isActive }) =>
              isActive ? s.navLinkActive : s.navLink
            }
            to="/"
          >
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink
              className={({ isActive }) =>
                isActive ? s.navLinkActive : s.navLink
              }
              to="/contacts"
            >
              Contacts
            </NavLink>
          )}
        </nav>
        {isLoggedIn && (
          <h2
            className={clsx({
              [s.welcome]: windowWidth >= 768,
              [s.hidden]: windowWidth > 319 || windowWidth < 768,
            })}
          >
            Welcome {user.name}
          </h2>
        )}
      </div>
      <div className={s.toggleContainer}>
        <Toggle
          className={s.tog}
          isChecked={theme === "dark"}
          handleChange={() => dispatch(themeToggle())}
        />
      </div>
    </header>
  );
};

export default Navigation;
