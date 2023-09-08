import React from "react";
import { Space, Button, Image } from "antd";

const CusHeader = () => {
    return (
        <div className="top-0  w-full flex items-center h-16 justify-between bg-slate-100  shadow-xl">
            <Image
                width={70}
                preview={false}
                src="src\assets\logo.png"
                className="rounded-2xl shadow-2xl"
            />
            <Space size={5}>
                <Button type="primary" className="bg-black">
                    登录
                </Button>
                <Button type="primary" className="bg-black">
                    注册
                </Button>
            </Space>
        </div>
    );
};

export default CusHeader;
