import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import AuthRoute from "@/components/AuthRoute";
import LoadRoute from "@/components/LoadRoute";
import BasicLayout from "@/layout/BasicLayout";
import HomeLayout from "@/layout/HomeLayout";
import Home from "@/pages/Home";
import Login from "@/pages/User/Login";
import Error404 from "@/pages/Error/404";
import Error403 from "@/pages/Error/403";
import Letter from "@/pages/Letter";
import Load from "@/components/Load/basicLoad";
import UploadFile from "@/pages/UploadFile";
import UploadVerifyFile from "@/pages/VerifyPage/UploadVerifyFile";
const CombFiles = lazy(() => import("@/pages/CombFiles"));
const DownloadFile = lazy(() => import("@/pages/DownloadFiles"));
const DataTablePage = lazy(() => import("@/pages/DataDisplay/DataTablePage"));
const DataListPage = lazy(() => import("@/pages/DataDisplay/DataListPage"));
const ResDisply = lazy(() => import("@/pages/VerifyPage/ResDisplay"));
import Admin from "@/pages/Admin";

const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
    {
        path: "/user",
        element: <BasicLayout />,
        children: [
            {
                path: "uploadFile",
                element: <UploadFile />,
            },
            {
                path: "combFiles",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <CombFiles />
                    </Suspense>
                ),
            },
            {
                path: "downloadFile",
                element: (
                    <Suspense fallback={<Load />}>
                        <DownloadFile />
                    </Suspense>
                ),
            },
            {
                path: "dataTablePage",
                element: (
                    <AuthRoute role={["admin", "user"]}>
                        <Suspense fallback={<Load />}>
                            <LoadRoute>
                                <DataTablePage />
                            </LoadRoute>
                        </Suspense>
                    </AuthRoute>
                ),
            },
            {
                path: "dataListPage",
                element: (
                    <AuthRoute role={["admin", "user"]}>
                        <Suspense fallback={<Load />}>
                            <LoadRoute>
                                <DataListPage />
                            </LoadRoute>
                        </Suspense>
                    </AuthRoute>
                ),
            },
            {
                path: "uploadVerifyFile",
                element: <UploadVerifyFile />,
            },
            {
                path: "resDisply",
                element: (
                    <Suspense fallback={<Load />}>
                        <ResDisply />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: "/admin",
        element: (
            <AuthRoute role={["admin"]}>
                <Admin />
            </AuthRoute>
        ),
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/letter",
        element: <Letter />,
    },
    {
        path: "*",
        element: <Error404 />,
    },
    {
        path: "/noAccess",
        element: <Error403 />,
    },
]);

export default myRoutes;
