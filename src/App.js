import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Heading } from "./components/heading";
import { TaskForm } from "./components/taskform";
import { TaskList } from "./components/tasklist";

function App() {
  return (
    <div className="h-screen text-white text-center p-10">
      <div className="container mx-auto h-full">
        <div>
          <Heading />
          <Switch>
            <Route path="/" component={TaskList} exact />
            <Route path="/add" component={TaskForm} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
