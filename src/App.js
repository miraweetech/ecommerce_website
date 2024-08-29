import "./App.css";
import Navigation from "./component/Navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation/>
      </Provider>
    </>
  );
}

export default App;
