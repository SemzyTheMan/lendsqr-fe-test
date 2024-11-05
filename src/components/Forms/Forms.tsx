import styles from "./Forms.module.scss";

export const Input = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <div className={`${styles.input_container}`}>
      <label htmlFor="">{label}</label>
      <input
        className={`${styles.all_forms}`}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};
export const SelectInput = ({ label }: { label: string }) => {
  return (
    <div className={`${styles.input_container}`}>
      <label htmlFor="">{label}</label>
      <select className={`${styles.all_forms}`}>
        <option>Select</option>
      </select>
    </div>
  );
};
export const DateInput = ({ label }: { label: string }) => {
  return (
    <div className={`${styles.input_container}`}>
      <label htmlFor="">{label}</label>
      <input className={`${styles.all_forms}`} type="date" />
    </div>
  );
};