import React from "react";

interface Props {
  isChecked: String[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string
  id?: String | number | any
  onClickHandle: any
}

const Checkbox = ({label, onClickHandle, id, handleChange}: Props) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type="checkbox"
        id={label}
        value={id}
        onChange={handleChange}
        onClick={onClickHandle}
      />
    </div>
  );
};
export default Checkbox;