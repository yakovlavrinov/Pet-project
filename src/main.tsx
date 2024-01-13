import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./redux/store/store.ts";
import { Provider } from "react-redux";
import "./styles/_reset.scss";
import "./styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
