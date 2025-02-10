import s from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <section className={s.appBarContainer}>
      <div className="container">
        <div className={s.appBar}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </section>
  );
};

export default AppBar;
