import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UploadPic from "./pages/UploadPic";
import ResPage from "./pages/ResPage";
import CusLayout from "./layout/Layout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CusLayout />}>
                    <Route index element={<Home />} />
                    <Route path="Upload" element={<UploadPic />} />
                    <Route path="ResPage" element={<ResPage />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
