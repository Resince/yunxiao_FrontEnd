import React from "react";
import { QRCode, Space, Image } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [text, setText] = React.useState("https://ant.design/");
    const navigate = useNavigate();

    // 测试审核端
    const handleAdmin = () => {
        navigate("/admin");
    };

    return (
        <div className="grid grid-cols-2 h-screen">
            <div className="flex flex-col gap-4 rounded-2xl shadow-2xl items-center justify-center my-28 ml-56 mr-36 bg-gray-100">
                <Image
                    width={80}
                    preview={false}
                    src="src\assets\logo.png"
                    className="rounded-2xl shadow-2xl basis-1/4"
                />
                <div className="text-2xl">登录</div>
                <div className="text-lg">使用微信扫码即可完成登录</div>
                <div className="mx-auto">
                    <Space direction="vertical" align="center" size={180}>
                        <QRCode value={text || "-"} />
                    </Space>
                </div>
            </div>
            <div className="flex flex-col gap-7 items-center justify-center bg-slate-200">
                <Image
                    width={600}
                    preview={false}
                    className="rounded-2xl shadow-2xl -mt-20"
                    src="src\assets\shewpic.png"
                />
                <div className="text-4xl">对我们网站的介绍</div>
                <div className="text-2xl">
                    云销可以帮你快速识别发票，审核发票，跟踪流程
                </div>
                <button onClick={handleAdmin}>进入审核</button>
            </div>
        </div>
    );
};
export default Login;
