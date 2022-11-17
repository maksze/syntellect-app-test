import React from "react";
import cx from "classnames";

export type TInputValue = string | number;

export interface IInput {
  value: TInputValue;
  onChange: (v: TInputValue) => void;
  className?: string;
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({
  value,
  onChange,
  className,
  placeholder = "Typing in anything",
}) => {
  return (
    <input
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={cx(
        "border text-base focus:ring-2 focus:ring-offset-2 rounded-lg py-2 px-4 focus:outline-none",
        className
      )}
      placeholder={placeholder}
    />
  );
};
