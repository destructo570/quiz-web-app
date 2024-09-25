"use client";
import React, { useState } from "react";
import "./checkbox.scss";
import { clsx } from "clsx";

type CustomCheckboxProps = {
  classes?: string;
  label?: string;
} & React.ComponentProps<"input">;

const Checkbox = (props: CustomCheckboxProps) => {
  const { classes, label, checked, ...rest } = props;
  const defaultState = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultState);

  return (
    <div className={clsx("checkbox-wrapper", classes)}>
      <label className="flex gap-4 items-center cursor-pointer">
        <input
          type="checkbox"
          className={clsx("checkbox-input", { checked: isChecked })}
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          {...rest}
        />
        <span className="font-bold">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
