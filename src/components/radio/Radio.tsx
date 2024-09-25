"use client";
import React, { useState } from "react";
import "./radio.scss";
import { clsx } from "clsx";

type CustomCheckboxProps = {
  classes?: string;
  label?: string;
} & React.ComponentProps<"input">;

const Radio = (props: CustomCheckboxProps) => {
  const { classes, label, ...rest } = props;
  return (
    <div className={clsx("radio-wrapper", classes)}>
      <label className="flex gap-4 items-center cursor-pointer">
        <input
          type="radio"
          className={clsx("radio-input")}
          {...rest}
        />
        <span className="font-bold">{label}</span>
      </label>
    </div>
  );
};

export default Radio;
