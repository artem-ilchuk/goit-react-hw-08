import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.baseContainer}>
      <div className="container">
        <div className={s.footerContainer}>
          <aside>
            <div className={s.footerLogoContainer}>
              <div>
                <img
                  src={"Logo.webp"}
                  alt="Logo image"
                  className={s.footerLogo}
                />
              </div>
              <div className={s.footerInfo}>
                <h2 className={s.footerTitle}>Phonebook</h2>
                <p className={s.footerDescription}>Seamless Connections</p>
              </div>
            </div>
            <p className={s.footerDetails}>
              &lt;DIV&gt;ELOPER STUDIO Ltd.
              <br />
              Developing web products since 2024
            </p>
          </aside>
          <div className={s.contacts}>
            <h6 className={s.contactsTitle}>Our contacts:</h6>
            <nav className={s.contactLinks}>
              <div className={s.contactLink}>
                <a
                  href="https://mail.google.com"
                  rel="noreferrer nofollow noopener"
                  target="_blank"
                >
                  <img
                    className={s.contactIcon}
                    src={"/Email.png"}
                    alt="Email"
                  />
                </a>
                <a
                  href="https://github.com/artem-ilchuk"
                  rel="noreferrer nofollow noopener"
                  target="_blank"
                >
                  <img
                    className={s.contactIcon}
                    src={"Github black.png"}
                    alt="GitHub"
                  />
                </a>
                <a
                  href="https://vercel.com/artems-projects-9aad7290"
                  rel="noreferrer nofollow noopener"
                  target="_blank"
                >
                  <img
                    className={s.contactIcon}
                    src={"Vercel.jpg"}
                    alt="Vercel"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/artem-ilchuk-3b0944315/"
                  rel="noreferrer nofollow noopener"
                  target="_blank"
                >
                  <img
                    className={s.contactIcon}
                    src={"Linkedin.png"}
                    alt="LinkedIn"
                  />
                </a>
              </div>
            </nav>
            <div className={s.footerFooter}>
              <p className={s.footerCopyright}>
                © Copyright 2025. Made by &lt;DIV&gt;ELOPER STUDIO Ltd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
