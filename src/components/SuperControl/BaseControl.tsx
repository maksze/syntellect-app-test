import React from "react";
import cx from "classnames";
import { Input, IInput } from "components/Form";
import { Button } from "components/Button";

type TConfigItem = {
  label: string;
  onClick: () => void;
  position: "left" | "right";
  className?: string;
};

export type TConfig = Array<TConfigItem>;

interface IBaseControl extends IInput {
  config: TConfig;
}

const positionMap = {
  left: "order-first",
  right: "order-last",
};

export const BaseControl: React.FC<IBaseControl> = ({ config, ...rest }) => {
  return (
    <div className="flex">
      <Input {...rest} />
      {config.map(({ label, onClick, position, className }: TConfigItem) => {
        return (
          <Button
            onClick={onClick}
            className={cx(className, positionMap[position])}
            key={`${label}-${position}`}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
};
