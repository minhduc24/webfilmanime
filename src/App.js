import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import BodyFilm from './components/BodyFilm';
import { Routes, Route } from 'react-router-dom';
import Locphim from './components/BodyFilm/FilterFilm';
import LichSu from './components/BodyFilm/History';
import FollowFilm from './components/BodyFilm/FollowFilm';
import DangNhap from './components/BodyFilm/Login';
import Dangky from './components/BodyFilm/Register';
function App() {
  return (
    <div className="App">
      <div className="Wrap">
        <Header />
        {/* <BodyFilm /> */}
        <Routes>
          <Route path="/" element={<BodyFilm />} />
          <Route path="/loc-phim" element={<Locphim />} />
          <Route path="/lich-su" element={<LichSu />} />
          <Route path="/theo-doi" element={<FollowFilm />} />
          <Route path="/dang-nhap" element={<DangNhap />} />
          <Route path="/dang-ky" element={<Dangky />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
