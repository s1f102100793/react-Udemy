import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
    // 中身はcssのプロパティだから最後が','
  };
  return <p style={contentStyle}>{children}</p>;
  // return <p style={contentStyle}>{props.message}</p>;
};

// export default ColorfulMessage;
// 違うエクスポートの仕方もあって３s目のやつ
