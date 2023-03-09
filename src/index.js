import React from "react";
import ReactDOM from "react-dom";
// Reactを使う際に必要

const App = () => {
  return (
    <React.Fragment>
      <h1>こんにちは!</h1>
      <p>お元気ですか？</p>
    </React.Fragment>
  );
  // JSのなかでreturnでhtmlタグを書いていくのがjsx記号
  // 難行も各場合はreturnの後に()で囲む
  // 一つのタグでreturnの中身を囲まないとエラーが起きる
  // エラー回避には<React.Fragment>がおすすめ
  // 一番楽なのは<></>で囲むこと
};

ReactDOM.render(<App />, document.getElementById("root"));
