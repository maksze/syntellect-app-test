import React from "react";

export type TInputValue = string | number;

export interface IInput {
  value: TInputValue;
  onChange: (v: TInputValue) => void;
}

export const Input: React.FC<IInput> = ({ value, onChange }) => {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="border text-base focus:ring-2 focus:ring-offset-2 rounded-lg py-2 px-4 focus:outline-none"
    />
  );
};
