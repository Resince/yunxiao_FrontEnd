import { SITE_LOGO_P2 } from "@/constants";
import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";

const GlobalHeader = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState("mail");

    return (
        <header class="header-outer">
            <div class="header-inner responsive-wrapper">
                <div class="header-logo">
                    <img src={SITE_LOGO_P2} />
                </div>
                <nav class="header-navigation">
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
