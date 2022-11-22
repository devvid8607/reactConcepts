import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Functionclick from "./components/Functionclick";
import Classclick from "./components/Classclick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ConditionalOptions from "./components/ConditionalOptions";
import NameLists from "./components/NameLists";
import FormComponent from "./components/FormComponent";
import MountLifecycleA from "./components/MountLifecycleA";
import TableFragment from "./components/TableFragment";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import Portal from "./components/Portal";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverComponent from "./components/HoverCounter";
import ClickCounter2 from "./components/ClickCounter2";
import HoverCounter2 from "./components/HoverCounter2";
import User from "./components/User";
import CounterRenderProps from "./components/CounterRenderProps";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <div className="App">
      <ComponentC />
      {/* <CounterRenderProps
        render={(count, incrementCount) => (
          <ClickCounter2
            count={count}
            incrementCount={incrementCount}
          ></ClickCounter2>
        )}
      />
      <CounterRenderProps
        render={(count, incrementCount) => (
          <HoverCounter2
            count={count}
            incrementCount={incrementCount}
          ></HoverCounter2>
        )}
      /> */}
      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedIn) => (isLoggedIn ? "Vidhya" : "Guest")} /> */}
      {/* <ClickCounter name="vidhya" />
      <HoverComponent /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <Portal /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <TableFragment /> */}
      {/* <MountLifecycleA /> */}
      {/* <FormComponent /> */}
      {/* <NameLists /> */}
      {/* <ConditionalOptions /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <Functionclick />
      <Classclick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Vidhya">
        <p>This is children props</p>
      </Greet>
      <Greet name="Gautham" />
      <Welcome name="Vinod" /> */}
    </div>
  );
}

export default App;
