import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Appbar from "./components/Appbar";
import AddMovie from "./pages/AddMovie";
function App() {
  return (
    <BrowserRouter>
    <Appbar/>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/movie/:id" element={<Movie/>}  />
        <Route path='/add-movie' element={<AddMovie/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
