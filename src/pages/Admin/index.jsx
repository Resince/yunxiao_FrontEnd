import React from "react";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";
import LeftMenu from "./LeftMenu";
import ContentView from "./ContentView";

const Admin = observer(() => {
    const store = useStore();
    return (
        <div className="flex min-h-screen">
            <LeftMenu store={store} />
            <ContentView store={store} />
        </div>
    )
})

export default Admin;