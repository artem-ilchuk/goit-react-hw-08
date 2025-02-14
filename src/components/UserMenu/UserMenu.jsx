import { useDispatch, useSelector } from "react-redux";
import s from "./UserMenu.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { useEffect, useState } from "react";
import { logoutThunk } from "../../redux/auth/operations";
import clsx from "clsx";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    isLoggedIn && (
      <div className={s.nav}>
        <div className={s.greet}>
          <h2
            className={clsx({
              [s.welcome]: windowWidth >= 768,
              [s.hidden]: windowWidth < 768,
            })}
          >
            <span className={s.greetTitle}> Welcome</span>
            {user.name}
          </h2>
        </div>
        <div className={s.authNav}>
          <button
            className={clsx({
              [s.hidden]: windowWidth < 768,
              [s.logoutButton]: windowWidth >= 768,
            })}
            onClick={() => dispatch(logoutThunk())}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default UserMenu;
