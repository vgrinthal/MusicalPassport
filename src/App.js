import {BrowserRouter, Routes, Route} from "react-router-dom";
import MyShows from "./Home";
import AddAShow from "./AddAShow";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<MyShows />} />
                <Route path="/add-a-show" element={<AddAShow />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;