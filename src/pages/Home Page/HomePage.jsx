import s from "./HomePage.module.css";
import Advantages from "../../components/Advantages/Advantages";
import WelcomeContent from "../../components/WelcomeContent/WelcomeContent";

const HomePage = () => {
  return (
    <div className={s.home_page}>
      <WelcomeContent />
      <Advantages />
    </div>
  );
};

export default HomePage;
