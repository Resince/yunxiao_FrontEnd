import React from "react";
import CusFooter from "@/components/Footer";
import CusHeader from "@/components/Header";
import { Outlet } from "react-router-dom";

const CusLayout = () => {
    return (
        <div>
            <CusHeader />
            <Outlet />
            <CusFooter />
        </div>
    );
};

export default CusLayout;
