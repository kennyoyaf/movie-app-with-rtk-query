import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import { TbMathIntegralX } from "react-icons/tb";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
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
