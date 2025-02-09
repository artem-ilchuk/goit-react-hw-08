import s from "./TogleSwitch.module.css";

export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className={s.toggleContainer}>
      <input
        type="checkbox"
        id="check"
        className={s.toggle}
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check"></label>
    </div>
  );
};
