import React, { useRef } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";
import SongsPage from "./pages/SongsPage";
import AddSongForm from "./components/AddSongForm";
import Details from "./components/Details";
// import { Audio } from './components/Audio';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AlbumsPage } from "./pages/AlbumsPage";
import { ArtistsPage } from "./pages/ArtistsPage";
import { GenrePage } from "./pages/GenrePage";
import StatisticsPage from "./pages/StatisticsPage";
import MusicPage from "./pages/MusicPage";

function App() {
  return (
    <div className="App bg-gray-50 relative">
      <ToastContainer />
      <Router>
      <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/songs" element={<SongsPage />} />
          <Route path="/new-song" element={<AddSongForm />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/albums" element={<AlbumsPage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/genre" element={<GenrePage />} />
        </Routes>
      </Router>
      {/* <Audio /> */}
    </div>
  );
}

export default App;
