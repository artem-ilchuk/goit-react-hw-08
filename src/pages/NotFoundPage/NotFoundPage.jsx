import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section className={s.notFound}>
      <div className="container">
        <img src="/src/assets/Not found.png" alt="Not found page" />
      </div>
    </section>
  );
};

export default NotFoundPage;
