import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { App } from "./components";

import "./index.css";
import { persistor, store } from "./redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
      <ToastContainer
        theme="light"
        style={{ zIndex: 99999 }}
        autoClose={2000}
      />
    </BrowserRouter>
  </>
);
