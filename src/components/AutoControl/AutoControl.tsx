import React, { useEffect } from "react";
import cx from "classnames";
import { Input } from "components/Form";
import { observer } from "mobx-react-lite";
import { countryStore } from ".";

interface IAutoControl {
  limit?: number;
}

export const AutoControl: React.FC<IAutoControl> = observer(({ limit = 5 }) => {
  const { isFetchingInProgress, items, needle, setNeedle } = countryStore;

  useEffect(() => {
    countryStore.fetch();
  }, [needle]);

  return (
    <div>
      <Input value={needle} onChange={(v: any) => setNeedle(v)} />

      {isFetchingInProgress ? <div>Loading</div> : null}

      {items.length > 1 &&
        items.slice(0, limit).map(({ name, fullName, flag }, i) => {
          return (
            <div
              className={cx("flex items-center p-2 cursor-pointer", {
                "bg-slate-200": i % 2,
              })}
              onClick={() => setNeedle(name)}
              key={fullName}
            >
              <img
                src={flag}
                alt={`flag of ${fullName}`}
                className="h-10 w-14 mr-4"
              />
              <div className="flex flex-col">
                <span>{name}</span>
                <span className="text-sm">{fullName}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
});
