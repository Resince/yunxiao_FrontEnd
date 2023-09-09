import React from "react";
import { Space, Button, Image } from "antd";
import { useNavigate } from "react-router-dom";

const CusHeader = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };

    const handleRegister = () => {};

    return (
        <div className="top-0  w-full flex items-center h-16 justify-between bg-slate-100  shadow-xl">
            <Space size={30}>
                <Image
                    width={70}
                    preview={false}
                    src="src\assets\logo.png"
                    className="rounded-2xl shadow-2xl"
                />
                <span className="font-mono text-xl">云销</span>
            </Space>
            <Space size={5}>
                <Button
                    type="primary"
                    className="bg-black"
                    onClick={handleLogin}
                >
                    登录
                </Button>
                <Button
                    type="primary"
                    className="bg-black"
                    onClick={handleRegister}
                >
                    注册
                </Button>
            </Space>
        </div>
    );
};

export default CusHeader;
