import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from "./pages/Home";
import Create from "./pages/Create";
import Gallery from "./pages/Gallery";
import AmogusDetails from "./pages/AmogusDetails";
import EditCharacter from "./pages/EditCharacter";

function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <h2><Link to="/">Home</Link></h2>
        <h2><Link to="/create">Create</Link></h2>
        <h2><Link to="/gallery">Gallery</Link></h2>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/gallery" element={<Gallery />}/>
        <Route path="/details/:name" element={<AmogusDetails />} />
        <Route path="/edit/:id" element={<EditCharacter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
