import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Home from "./Pages/Home";
// import Header from "./Components/Header";
import Player from "./Pages/Player";
import TvShows from "./Pages/TvShows";
import MoviePages from "./Pages/MoviePages";
// import BackGroundImage from "./Components/BackGroundImage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/tv" element={<TvShows/>} />
        <Route path="/movie" element={<MoviePages/>} />
      </Routes>
      {/* <BackGroundImage/> */}
      {/* <Header /> */}
    </BrowserRouter>
  );
}

export default App;
