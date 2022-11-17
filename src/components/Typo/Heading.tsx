import cx from "classnames";
import { ITypografix } from ".";

export const H1: React.FC<ITypografix> = ({ children, className, id }) => {
  return (
    <h1 className={cx("text-3xl font-bold mt-4 mb-6", className)} id={id}>
      {children}
    </h1>
  );
};

export const H2: React.FC<ITypografix> = ({ children, className, id }) => {
  return (
    <h2 className={cx("text-2xl font-bold mt-4 mb-6", className)} id={id}>
      {children}
    </h2>
  );
};

export const H3: React.FC<ITypografix> = ({ children, className, id }) => {
  return (
    <h3 className={cx("text-xl font-bold mt-4 mb-6", className)} id={id}>
      {children}
    </h3>
  );
};
