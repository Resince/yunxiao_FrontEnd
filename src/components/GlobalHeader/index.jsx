import { SITE_LOGO_P2 } from "@/constants";
import { useNavigate, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "@/store/index";
import "./index.css";

const GlobalHeader = () => {
    const navigate = useNavigate();
    const { AuthStore } = useStore();
    const [userInfo, setUserInfo] = useState({});
    useEffect(() => {
        setUserInfo(AuthStore.userInfo);
    }, [AuthStore.userInfo]);

    const handleLoginOut = () => {
        AuthStore.logout();
    };

    return (
        <header className="header-outer header-wrapper">
            <div className="header-inner responsive-wrapper">
                <div
                    className="header-logo"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <img src={SITE_LOGO_P2} width="180" />
                </div>
                <nav className="header-navigation">
                    <a className="sp" href="/user/uploadFile">
                        报销单生成
                    </a>
                    <a className="sp" href="/user/uploadVerifyFile">
                        发票验真
                    </a>
                    <a className="sp" href="/user/dataTablePage">
                        数据分析
                    </a>
                    {AuthStore.isLogin() ? (
                        <div className="userCenter">
                            <a className="sp">个人中心 </a>
                            <ul className="dropdown">
                                <li>
                                    <a href="#">用户信息</a>
                                </li>
                                <li>
                                    <a href="#">关于我们</a>
                                </li>
                                <li>
                                    <a href="#">给我们反馈</a>
                                </li>
                                <li className="exit">
                                    <a
                                        onClick={() => {
                                            handleLoginOut();
                                        }}
                                    >
                                        退出
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <a className="sp" href="/login">
                            登录
                        </a>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default observer(GlobalHeader);
