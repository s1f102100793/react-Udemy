// Reactのコンポーネントとわかりやすくするために
// jsxを拡張子として使う
import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onCLickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);//Stateを使う際に必要

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      {/* <ColorfulMessage color="pink" message="元気です!" /> */}
      <button onClick={onCLickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
  // JSのなかでreturnでhtmlタグを書いていくのがjsx記号
  // 難行も各場合はreturnの後に()で囲む
  // 一つのタグでreturnの中身を囲まないとエラーが起きる
  // エラー回避には<React.Fragment>がおすすめ
  // 一番楽なのは<></>で囲むこと
  // Reactでは表示の部分をコンポーネントとして分けて管理する。
  // {{}}外側がjsを書きますというカッコで内側がjsのオブジェクトのカッコ
};

export default App;
// ほかのファイルでも使えるようにエクスポートする意味
