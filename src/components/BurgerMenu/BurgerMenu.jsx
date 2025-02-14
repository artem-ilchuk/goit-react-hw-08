import s from "./BurgerMenu.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import clsx from "clsx";
import MobMenu from "../MobMenu/MobMenu";

const BurgerMenu = ({ windowWidth }) => {
  const [isMobModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <GiHamburgerMenu
        className={clsx({
          [s.hidden]: windowWidth >= 768,
          [s.burger]: windowWidth < 768,
        })}
        onClick={handleOpenModal}
      />
      {isMobModalOpen && (
        <MobMenu
          isOpen={isMobModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default BurgerMenu;
