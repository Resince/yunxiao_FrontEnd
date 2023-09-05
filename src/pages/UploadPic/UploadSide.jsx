import React from "react";
import { Button, Upload } from "antd";

const UploadSide = () => {
    const handleOnClick = () => {
        // todo
        // 提交
    };

    return (
        <div className="flex flex-col items-center justify-end h-full">
            <Button
                type="primary"
                size="large"
                className="bg-black mb-28"
                onClick={handleOnClick}
            >
                click here
            </Button>
        </div>
    );
};

export default UploadSide;
