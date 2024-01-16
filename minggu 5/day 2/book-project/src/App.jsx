import Books from "./Books";
import ListBookHome from "./components/ListBookHome";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <ListBookHome />
      {/* <Books /> */}
    </>
  );
}

export default App;
