import s from "./UserMenu.module.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

const UserMenu = () => {
  return (
    <section className={s.appContainer}>
      <div className="container">
        <div className={s.content}>
          <div className={s.leftPanel}>
            <ContactForm />
            <SearchBox />
          </div>

          <div className={s.rightPanel}>
            <ContactList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserMenu;
