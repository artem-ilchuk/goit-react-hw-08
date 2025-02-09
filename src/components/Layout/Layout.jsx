import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import Footer from "../Footer/Footer";
import s from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={s.layout}>
      <AppBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
