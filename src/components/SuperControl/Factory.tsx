import React, { useState } from "react";
import { BaseControl, TConfig } from ".";
import { TInputValue } from "components/Form";

export const SuperControlV1: React.FC<{}> = () => {
  const [value, setValue] = useState<TInputValue>("");

  const config: TConfig = [
    {
      label: "Reset",
      onClick: () => setValue(""),
      position: "right",
      className: "mr-4 ml-4",
    },
    {
      label: "Set Hello",
      onClick: () => setValue("Hello world!!!"),
      position: "right",
    },
  ];

  return (
    <BaseControl
      config={config}
      value={value}
      onChange={(v: TInputValue) => setValue(v)}
    />
  );
};

export const SuperControlV2: React.FC<{}> = () => {
  const [value, setValue] = useState<TInputValue>("");

  // TODO: mv to util
  function isNumber(value: string | number): boolean {
    return value != null && value !== "" && !isNaN(Number(value.toString()));
  }

  const config: TConfig = [
    {
      label: "Show if Number",
      onClick: () => alert(isNumber(value) ? value : "Is NaN"),
      position: "left",
      className: "mr-4",
    },
    {
      label: "Show content",
      onClick: () => alert(value || "empty"),
      position: "right",
      className: "ml-4",
    },
  ];

  return (
    <BaseControl
      config={config}
      value={value}
      onChange={(v: TInputValue) => setValue(v)}
    />
  );
};
