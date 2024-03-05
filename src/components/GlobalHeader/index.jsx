import { SITE_LOGO_P2 } from "@/constants";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";

const GlobalHeader = () => {
    const navigate = useNavigate();

    return (
        <header className="header-outer header-wrapper">
            <div className="header-inner responsive-wrapper">
                <div
                    className="header-logo"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <img src={SITE_LOGO_P2} width="210" />
                </div>
                <nav className="header-navigation">
                    <a href="/uploadFile">报销单生成</a>
                    <a href="/uploadVerifyFile">发票验真</a>
                    <a href="/dataTablePage">数据分析</a>
                    <button
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        登录
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default GlobalHeader;
