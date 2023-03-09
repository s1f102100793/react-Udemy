import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
    // 中身はcssのプロパティだから最後が','
  };
  return <p style={contentStyle}>{children}</p>;
  // return <p style={contentStyle}>{props.message}</p>;
};

export default ColorfulMessage;
