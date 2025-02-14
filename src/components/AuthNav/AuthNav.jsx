import s from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const AuthNav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={s.nav}>
      <div
        className={clsx({
          [s.hidden]: windowWidth > 319 || windowWidth < 768,
          [s.nav]: windowWidth >= 768,
        })}
      >
        <NavLink className={s.navLink} to="/register">
          Register
        </NavLink>
        <NavLink className={s.navLink} to="/login">
          Login
        </NavLink>
      </div>
      <BurgerMenu windowWidth={windowWidth} />
    </div>
  );
};

export default AuthNav;
