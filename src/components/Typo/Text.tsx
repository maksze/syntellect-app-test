import cx from "classnames";
import { ITypografix } from ".";

export const P: React.FC<ITypografix> = ({ children, className }) => {
  return <p className={cx("mb-4", className)}>{children}</p>;
};

export const List: React.FC<ITypografix> = ({ children, className }) => {
  return <ul className={cx("mb-4", className)}>{children}</ul>;
};

export const Li: React.FC<ITypografix> = ({ children, className }) => {
  return <li className={cx("mb-4", className)}>{children}</li>;
};
