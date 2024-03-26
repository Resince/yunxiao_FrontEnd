import { Outlet } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store/index";
import Load from "@/components/Load/basicLoad";

function LoadRoute({ children }) {
    const { UserDataStore } = useStore();

    useEffect(() => {
        UserDataStore.getAllData();
    }, []);

    if (!UserDataStore.accept) {
        return <Load />;
    }

    return <Fragment>{children ? children : <Outlet />}</Fragment>;
}

export default observer(LoadRoute);
