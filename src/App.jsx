// Reactのコンポーネントとわかりやすくするために
// jsxを拡張子として使う
import React from "react";

const App = () => {
  return (
    <>
      <h1>こんにちは!</h1>
      <p>お元気ですか？</p>
    </>
  );
  // JSのなかでreturnでhtmlタグを書いていくのがjsx記号
  // 難行も各場合はreturnの後に()で囲む
  // 一つのタグでreturnの中身を囲まないとエラーが起きる
  // エラー回避には<React.Fragment>がおすすめ
  // 一番楽なのは<></>で囲むこと
  // Reactでは表示の部分をコンポーネントとして分けて管理する。
};

export default App;
// ほかのファイルでも使えるようにエクスポートする意味
