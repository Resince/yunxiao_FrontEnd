import React, { useState } from "react";
import { Button, Upload, Modal } from "antd";
import PreviewData from "./PreviewData";
import { useStore } from "../../store";
import { uploadImg } from "../../service/uploadImages";

const bodyStyle = {
    height: "450px",
    overflow: "hidden",
    overflowY: "scroll",
};

const UploadSide = () => {
    const navigate = useNavigate();
    const store = useStore();

    const handleOnClick = () => {
        navigate("/resPage")
    };

    return (
        <div className="flex flex-col items-center justify-end h-full">
            <Button
                type="primary"
                size="large"
                className="bg-black mb-28"
                onClick={handleOnClick}
            >
                点击识别
            </Button>
            {/* <Modal
                title="识别结果"
                open={viewFlag}
                onCancel={() => setViewFlag(false)}
                footer={null}
                bodyStyle={bodyStyle}
            >
                <PreviewData />
            </Modal> */}
        </div>
    );
};

export default UploadSide;
