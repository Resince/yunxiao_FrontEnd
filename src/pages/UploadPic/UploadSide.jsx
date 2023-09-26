import React from "react";
import { Button } from "antd";
import { useNavigate } from 'react-router-dom';
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";

const UploadSide = () => {
    const navigate = useNavigate();
    const store = useStore();

    const handleOnClick = () => {
        navigate("/resPage");
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
        </div>
    );
};

export default UploadSide;
