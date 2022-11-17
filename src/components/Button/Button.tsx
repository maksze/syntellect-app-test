import React from "react";
import cx from "classnames";

interface IButton {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  testId?: null | string;
  type?: "button" | "submit" | "reset" | undefined;
}

const baseStyle =
  "border py-2 px-4 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg text-blue-500 bg-white-600 hover:bg-white-700 focus:ring-white-500 focus:ring-offset-white-200";

export const Button: React.FC<IButton> = ({
  children,
  className,
  disabled = false,
  onClick,
  testId = null,
  type = undefined,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cx(baseStyle, className)}
      data-testid={testId}
    >
      {children}
    </button>
  );
};
