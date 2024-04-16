import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store/index";
import Load from "@/components/Load/basicLoad";

function AuthRoute({ children, role }) {
    const location = useLocation();
    const { AuthStore } = useStore();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (AuthStore.userInfo.role) {
            setIsLoading(false);
        }
    }, []);

    // 职责判断
    if (!AuthStore.isLogin()) {
        // 未登录
        navigate("/login");
    } else if (role.indexOf(AuthStore.userInfo.role) === -1) {
        navigate("/noAccess");
    }
    return <Fragment>{children ? children : <Outlet />}</Fragment>;
}

export default observer(AuthRoute);
