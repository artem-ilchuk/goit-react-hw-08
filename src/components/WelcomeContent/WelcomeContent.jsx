import s from "./WelcomeContent.module.css";

const WelcomeContent = () => {
  return (
    <section className={s.welcomeSection}>
      <div className="container">
        <h1 className={s.title}>Welcome to Phonebook!</h1>
        <div className={s.contentContainer}>
          <img className={s.image} src={"Hero.png"} alt="Notebook image" />
          <div className={s.textContainer}>
            <ul>
              <li className={s.textItem}>
                <p className={s.text}>
                  Phonebook is a smart and efficient contact management tool
                  designed to store, organize, and access all your contacts with
                  ease. Whether for personal use or business purposes, this app
                  ensures you have all essential contact details at your
                  fingertips.
                </p>
              </li>
              <li className={s.textItem}>
                <p className={s.text}>
                  Phonebook is an app for easy storage and management of your
                  contacts. Here, you can add, edit, and search your contacts,
                  as well as sync them across devices.
                </p>
              </li>
              <li className={s.textItem}>
                <p className={s.text}>
                  Bring order and security to your phonebook. All your data is
                  protected, and you can easily find the information you need.
                </p>
              </li>
              <li className={s.textItem}>
                <p className={s.text}>
                  To get started, simply sign up or log in to your account.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeContent;
