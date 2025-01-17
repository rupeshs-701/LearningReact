import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App!!</h1>
      {/* In JavaScript, if you add a line break immediately after return, it will not consider the code following it as the return value. */}
    </div>
  );
}

// const reactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank',
//     },
//     children:'Click me to visit Google...'
// };

// const anotherElement = (
//     <a href = "https://google.com" target = "_blank">Visit Google</a>
// )

// const reactElement = React.createElement(
//     'a',
//     {
//         href:"https://google.com" ,target:'_blank'
//     },
//     'Click me to visit Google!!'
// )

// ReactDOM.createRoot(document.getElementById('root')).
// render(
//     // <MyApp/>
//     // MyApp()
//     // reactElement
//     // anotherElement
//     // reactElement

// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//its your choice whether to have react strict mode or not