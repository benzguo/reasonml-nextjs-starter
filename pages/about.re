[%bs.raw {|require("../css/main.css")|}];

let countWordsInString = text => {
  let spacesRegex = Js.Re.fromString("\s+");

  switch (text) {
  | "" => 0
  | noneEmptyText =>
    noneEmptyText
    |> Js.String.trim
    |> Js.String.splitByRe(spacesRegex)
    |> Js.Array.length
  };
};

module CopyClipboard = {
  [@bs.module "react-copy-to-clipboard"] [@react.component]
  external make: (~text: string, ~children: React.element) => React.element =
    "CopyToClipboard";
};

[@react.component]
let make = () => {
  let (text, setText) = React.useState(() => "");
  let handleTextChange = e => ReactEvent.Form.target(e)##value |> setText;
  let handleClearClick = _ => setText(_ => "");
  let wordsCountText =
    (text |> countWordsInString |> string_of_int) ++ " words";
  <div>
    <Header />
    <span> {wordsCountText |> ReasonReact.string} </span>
    <p className="text-xs">
      {"This is the about page." |> ReasonReact.string}
    </p>
    <textarea
      placeholder="Express yourself..."
      value=text
      onChange=handleTextChange
    />
    <Button
      title="Clear text"
      onClick=handleClearClick
      disabled={String.length(text) === 0}
    />
    <CopyClipboard text>
      <Button title="Copy text" disabled={String.length(text) === 0} />
    </CopyClipboard>
    <Counter />
  </div>;
};

let default = make;