import GlobalFooter from "@/components/GlobalFooter";
import GlobalHeader from "@/components/GlobalHeader";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";

export default function BasicLayout() {
    return (
        <Fragment>
            <GlobalHeader />
            <main>
                <Outlet />
            </main>
        </Fragment>
    );
}
