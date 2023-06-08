import React from "react";
import "./Buttons.scss";

export const PrimaryButton = ({ btnClass, btnName }) => {
  return (
    <a
      href=""
      className={
        btnClass
          ? ["primaryBtn", btnClass ? btnClass : ""].join(" ")
          : "primaryBtn"
      }
    >
      {btnName}
    </a>
  );
};

export const BorderButton = ({ btnClass, btnName }) => {
  return (
    <a
      href=""
      className={
        btnClass
          ? ["borderBtn", btnClass ? btnClass : ""].join(" ")
          : "borderBtn"
      }
    >
      {btnName}
    </a>
  );
};
