import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Heading } from "./components/heading";
import { TaskForm } from "./components/taskform";
import { TaskList } from "./components/tasklist";
import { ContextProvider } from "./context/global-context";

function App() {
  return (
    <div className="h-screen text-white text-center p-10">
      <div className="container mx-auto h-full">
        <div>
          <ContextProvider>
            <Heading />
            <Switch>
              <Route path="/" component={TaskList} exact />
              <Route path="/add" component={TaskForm} />
            </Switch>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
