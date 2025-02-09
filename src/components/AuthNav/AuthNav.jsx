import s from "./AuthNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import clsx from "clsx";
import MobMenu from "../MobMenu/MobMenu";

const AuthNav = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isMobModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div className={s.authNav}>
      {isLoggedIn ? (
        <button
          className={clsx({
            [s.hidden]: windowWidth > 319 || windowWidth < 768,
            [s.logoutButton]: windowWidth >= 768,
          })}
          onClick={() => dispatch(logoutThunk())}
        >
          Logout
        </button>
      ) : (
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
      )}
      <GiHamburgerMenu
        className={clsx({
          [s.hidden]: windowWidth >= 768,
          [s.burger]: windowWidth > 319 || windowWidth < 768,
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
