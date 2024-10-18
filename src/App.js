import "./App.css";
import User from "./components/user";
import UserForm from "./components/userForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title_h1">Welcome to the App</h1>
        <div className="title_bottom"></div>
        <User />
        <UserForm />
      </div>
    </div>
  );
}

export default App;
