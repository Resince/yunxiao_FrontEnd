import React from "react";
import CusFooter from "@/components/Footer";
import CusHeader from "@/components/Header";
import { Outlet } from "react-router-dom";

const CusLayout = () => {
    return (
        <div>
            <CusHeader />
            <main>
                <Outlet />
            </main>
            <CusFooter />
        </div>
    );
};

export default CusLayout;
