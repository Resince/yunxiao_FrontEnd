import React from "react";
import UploadCard from "./UploadCard";
import { Image } from "antd";

function Home() {
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <Image preview={false} src="src\assets\homeShowpic.png" />
            <div className="my-16">
                <div className="text-center font-semibold mb-8 text-4xl">
                    上传发票以
                    <br />
                    获取发票数据
                </div>
                <UploadCard />
            </div>
        </div>
    );
}
export default Home;
