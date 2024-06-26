import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector(state => state.darkMode.darkMode);

  return (
    <div className={`App ${darkMode ? "black-container" : "white-container"}`}>
      <Header />
      <main
        className={`container ${
          darkMode ? "black-container" : "white-container"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/movie/:imdbID" element={<MovieDetail />} exact />
          <Route element={<PageNotFound />} exact />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
