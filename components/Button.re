/* src/Button.re */

[@react.component]
let make = (~onClick=_ => (), ~title: string, ~disabled=false) => {
  <button onClick title disabled> {ReasonReact.string(title)} </button>;
};