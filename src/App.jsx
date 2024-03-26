import { RouterProvider } from "react-router-dom";
import myRoutes from "@/routes";
import { StrictMode, useEffect } from "react";
import { useStore } from "./store";
import myAxios from "./utils/axios";
// 加载画面

// 初始化
const initialization = () => {
    const { AuthStore } = useStore();
    console.log("应用初始化开始");
    // 初始化用户信息
    myAxios.get("/user/currentUser").then((res) => {
        AuthStore.setUserInfo = res.data.userInfo;
    });
    console.log("应用初始化完成");
};

function App() {
    initialization();
    return (
        <StrictMode>
            <RouterProvider router={myRoutes} />
        </StrictMode>
    );
}

export default App;
