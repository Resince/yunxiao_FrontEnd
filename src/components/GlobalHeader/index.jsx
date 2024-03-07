import { SITE_LOGO_P2 } from "@/constants";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";

const GlobalHeader = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState("mail");

    return (
        <header className="header-outer">
            <div className="header-inner responsive-wrapper">
                <div className="header-logo">
                    <img src={SITE_LOGO_P2} />
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
