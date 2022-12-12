import logo from "./logo.svg";
import "./App.css";
import StateHook from "./components/StateHook";
import StateHook2 from "./components/StateHook2";
import StateHook3 from "./components/StateHook3";
import StateHook4 from "./components/StateHook4";
import UseEffect1 from "./components/UseEffect1";
import ClassCounter from "./components/ClassCounter";
import UseEffect2 from "./components/UseEffect2";
import UseEffect3 from "./components/UseEffect3";
import UseEffect4 from "./components/UseEffect4";
import DataFetching from "./components/DataFetching";
import ContextComponentC from "./components/ContextComponentC";
import UseReducerCounter1 from "./components/UseReducerCounter1";
import UseReducerCounter2 from "./components/UseReducerCounter2";
import ComponentA from "./components/ReducerContext/ComponentA";
import ComponentB from "./components/ReducerContext/ComponentB";
import ComponentC from "./components/ReducerContext/ComponentC";
import React, { useReducer } from "react";
import DataFetching1 from "./components/DataFetching1";
import DataFecthing2 from "./components/DataFecthing2";
import ParentComponent from "./components/UseCallBackExample/ParentComponent";
import UseMemo from "./components/useMemo";
import UseRefdemo from "./components/UseRefdemo";
import DocTitle1 from "./components/CustomHooks/DocTitle1";
import Counter1 from "./components/CustomHooks/Counter1";
import UserForm from "./components/CustomHooks/UserForm";

export const CountContext = React.createContext();

const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    // <CountContext.Provider
    //   value={{ countValue: count, dispatchValue: dispatch }}
    // >
    <div className="App">
      <UserForm />
      {/* <Counter1 /> */}
      {/* <DocTitle1 /> */}
      {/* <UseRefdemo /> */}
      {/* <UseMemo /> */}
      {/* <ParentComponent /> */}
      {/* <DataFecthing2 /> */}
      {/* <DataFetching1 /> */}
      {/* Count -{count} */}
      {/* <ComponentA />
        <ComponentB />
        <ComponentC /> */}
      {/* <UseReducerCounter2 /> */}
      {/* <UseReducerCounter1 /> */}
      {/* <ContextComponentC /> */}
      {/* <DataFetching /> */}
      {/* <UseEffect4 /> */}
      {/* <UseEffect3 /> */}
      {/* <UseEffect2 /> */}
      {/* <ClassCounter /> */}
      {/* <UseEffect1 /> */}
      {/* <StateHook4 /> */}
      {/* <StateHook3 /> */}
      {/* <StateHook2 /> */}
      {/* <StateHook /> */}
    </div>
    // </CountContext.Provider>
  );
}

export default App;
