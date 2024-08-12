import React from "react";
import "./Buttons.scss";

export const PrimaryButton = ({ btnClass, btnName, type }) => {
  return (
    <button
      className={
        btnClass
          ? ["primaryBtn", btnClass ? btnClass : ""].join(" ")
          : "primaryBtn"
      }
      type={type}
    >
      {btnName}
    </button>
  );
};

export const BorderButton = ({ btnClass, btnName }) => {
  return (
    <button
      className={
        btnClass
          ? ["borderBtn", btnClass ? btnClass : ""].join(" ")
          : "borderBtn"
      }
    >
      {btnName}
    </button>
  );
};
