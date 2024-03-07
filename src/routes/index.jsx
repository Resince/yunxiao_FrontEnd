import { useRoutes } from "react-router-dom";
import Home from "@/pages/Home";
import UploadFile from "@/pages/UploadFile";
import CombFiles from "@/pages/CombFiles";
import DownloadFile from "@/pages/DownloadFiles";
import Login from "@/pages/User/Login";
import ResDisply from "@/pages/VerifyPage/ResDisplay";
import UploadVerifyFile from "@/pages/VerifyPage/UploadVerifyFile";
import BasicLayout from "@/layout/BasicLayout";
import NoFoundPage from "@/pages/404";
import DataTablePage from "@/pages/DataDisplay/DataTablePage";
import DataListPage from "@/pages/DataDisplay/DataListPage";
import Admin from "@/pages/Admin";

const MyRoutes = () => {
    const element = useRoutes([
        {
            path: "/",
            element: <BasicLayout />,
            children: [
                {
                    index: true,
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "uploadFile",
                    element: <UploadFile />,
                },
                {
                    path: "combFiles",
                    element: <CombFiles />,
                },
                {
                    path: "downloadFile",
                    element: <DownloadFile />,
                },
                {
                    path: "dataTablePage",
                    element: <DataTablePage />,
                },
                {
                    path: "dataListPage",
                    element: <DataListPage />,
                },
                {
                    path: "uploadVerifyFile",
                    element: <UploadVerifyFile />,
                },
                {
                    path: "resDisply",
                    element: <ResDisply />,
                },
            ],
        },
        {
            path: "/admin",
            element: <Admin />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "*",
            element: <NoFoundPage />,
        },
        {
            path: "/admin",
            element: <Admin />,
        },
    ]);
    return element;
};

export default MyRoutes;
