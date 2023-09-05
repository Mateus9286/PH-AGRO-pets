import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle />
      <RoutesMain />
    </>
  );
}

export default App;
