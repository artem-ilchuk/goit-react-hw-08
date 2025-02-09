import s from "./AppBar.module.css";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";

const AppBar = () => {
  return (
    <section className={s.appBarContainer}>
      <div className="container">
        <div className={s.appBar}>
          <Navigation />
          <AuthNav />
        </div>
      </div>
    </section>
  );
};

export default AppBar;
