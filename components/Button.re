/* src/Button.re */

[@react.component]
let make = (~onClick=_ => (), ~title: string, ~disabled=false) => {
  <button onClick title disabled className="Button">
    {ReasonReact.string(title)}
  </button>;
};