import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UploadPic from "./pages/UploadPic";
import ResPage from "./pages/ResPage";
import CusLayout from "./layout/Layout";
import Admin from "./pages/Admin";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CusLayout />}>
                    <Route index element={<Home />} />
                    <Route path="upload" element={<UploadPic />} />
                    <Route path="resPage" element={<ResPage />} />
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
