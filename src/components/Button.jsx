import React from "react";
import ButtonBootstrap from "react-bootstrap/Button";

const CustomButton = (props) => {
  return (
    <ButtonBootstrap
      type={props.type === "button" ? "button" : "submit"}
      className="btn btn-primary btn-lg px-4 gap-3"
      onClick={props.onClick}
    >
      {props.text}
    </ButtonBootstrap>
  );
};

export default CustomButton;
