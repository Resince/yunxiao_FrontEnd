import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import Home from "@/pages/Home";
import UploadPic from "@/pages/UploadPic";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/uploadPic" element={<UploadPic />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
