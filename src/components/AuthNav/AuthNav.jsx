import s from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from "clsx";
import MobMenu from "../MobMenu/MobMenu";
import { GiHamburgerMenu } from "react-icons/gi";

const AuthNav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleOpenModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

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
      <GiHamburgerMenu
        className={clsx({
          [s.hidden]: windowWidth >= 768,
          [s.burger]: windowWidth < 768,
        })}
        onClick={handleOpenModal}
      />

      {isMobModalOpen && (
        <MobMenu
          isOpen={isMobModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default AuthNav;
