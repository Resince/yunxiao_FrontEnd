import React from "react";
import { Button } from "antd";
import { useStore } from "../../store";
import { uploadImg } from "../../service/uploadImages";


const UploadSide = () => {
    const store = useStore();

    const handleOnClick = () => {
        uploadImg(store.UploadImgStore.getImgList.at(0)).then((res) => {
            console.log(res);
        });
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
