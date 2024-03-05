import GlobalFooter from "@/components/GlobalFooter";
import GlobalHeader from "@/components/GlobalHeader";
import { Outlet } from "react-router-dom";

export default function BasicLayout() {
    return (
        <div>
            <GlobalHeader />
            <main>
                <Outlet />
            </main>
            <GlobalFooter />
        </div>
    );
}
