import { useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";
import AddSongForm from "./components/AddSongForm";
import Details from "./components/Details";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StatisticsPage from "./pages/StatisticsPage";
import MusicPage from "./pages/MusicPage";
import { useAppDispatch, useAppSelector } from "./features/hooks";
import { songSelector, statisticsSelector } from "./features/store";
import { getSongPending } from "./features/songs/songSlice";
import { getStatisticsPending } from "./features/statistics/statisticSlice";

function App() {
  const { songs } = useAppSelector(songSelector);
  const { statistics } = useAppSelector(statisticsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (songs.length === 0) {
      dispatch(getSongPending());
    }
    if (statistics.length === 0) {
      dispatch(getStatisticsPending());
    }
  }, [dispatch, songs.length, statistics.length]);

  return (
    <div className="App bg-gray-50 relative">
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<MusicPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/new-song" element={<AddSongForm />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
