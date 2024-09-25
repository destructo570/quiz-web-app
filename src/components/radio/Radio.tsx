"use client";
import React, { useState } from "react";
import "./radio.scss";
import { clsx } from "clsx";

type CustomCheckboxProps = {
  classes?: string;
  label?: string;
} & React.ComponentProps<"input">;

const Radio = (props: CustomCheckboxProps) => {
  const { classes, label, checked, ...rest } = props;
  const defaultState = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultState);
  return (
    <div className="radio-wrapper">
      <label className="flex gap-4 items-center cursor-pointer">
        <input
          type="radio"
          className={clsx("radio-input", classes, { checked: isChecked })}
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          {...rest}
        />
        <span className="font-bold">{label}</span>
      </label>
    </div>
  );
};

export default Radio;
